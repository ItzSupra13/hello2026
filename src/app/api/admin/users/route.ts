import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";
import type { SortOrder } from "mongoose";

export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 20);
    const search = searchParams.get("search");
    const attended = searchParams.get("attended");
    const department = searchParams.get("department");
    const sort = searchParams.get("sort") || "latest";

    const skip = (page - 1) * limit;

    const query: any = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ];
    }
    if (attended === "true") query.attendance = true;
    if (attended === "false") query.attendance = false;
    if (department) query.department = department;

    const sortQuery: Record<string, SortOrder> =
      sort === "oldest"
        ? { registeredAt: 1 }
        : { registeredAt: -1 };

    const [users, total] = await Promise.all([
      User.find(query)
        .select(
          "name email phone university department year attendance registeredAt attendanceMarkedAt"
        )
        .sort(sortQuery)
        .skip(skip)
        .limit(limit)
        .lean(),

      User.countDocuments(query)
    ]);

    return NextResponse.json({
      users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

