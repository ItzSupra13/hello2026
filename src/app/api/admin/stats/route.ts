import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";

export async function GET() {
  try {
    await connectToDatabase();

    /* ---------- TOTALS ---------- */
    const [registered, attended] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ attendance: true })
    ]);

    /* ---------- DEPARTMENT PIE ---------- */
    const departmentWise = await User.aggregate([
      {
        $group: {
          _id: "$department",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          department: { $ifNull: ["$_id", "Unknown"] },
          count: 1
        }
      },
      { $sort: { count: -1 } }
    ]);

    /* ---------- LAST 30 DAYS BAR ---------- */
    const registrationsByDay = await User.aggregate([
    {
      $match: {
        registeredAt: {
          $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        }
      }
    },
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$registeredAt",
            timezone: "Asia/Kolkata"
          }
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } },
    {
      $project: {
        _id: 0,
        date: "$_id",
        count: 1
      }
    }
  ]);


    return NextResponse.json({
      totals: {
        registered,
        attended,
      },
      departmentWise,
      registrationsByDay
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
