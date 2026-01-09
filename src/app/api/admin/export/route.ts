import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    
    const attended = searchParams.get("attended");
    const department = searchParams.get("department");

    const query: any = {};

    if (attended === "true") query.attendance = true;
    if (attended === "false") query.attendance = false;
    if (department) query.department = department;

    const users = await User.find(query)
      .select(
        "name email phone university department year attendance registeredAt attendanceMarkedAt"
      )
      .sort({ registeredAt: -1 })
      .lean();

    const headers = [
      "Name",
      "Email",
      "Phone",
      "Department",
      "Year of Graduation",
      "University/College",
      "Attendance",
      "Registered At",
    ];

    const rows = users.map(user => [
      user.name,
      user.email,
      user.phone,
      user.department ?? "",
      user.year,
      user.university ?? "",
      user.attendance ? "Attended" : "Registered",
      user.registeredAt?.toISOString(),
    ]);

    const csv = [
      headers.join(","),
      ...rows.map(row =>
        row.map(field => `"${String(field ?? "").replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="hello-ieee-users.csv"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to export data" },
      { status: 500 }
    );
  }
}