import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { sendAttendanceEmail } from "@/lib/email";

const SECRET_KEY: string = "pQ7z!Gd@2Xy$K9vMn#T5wL&3Hb^JfC";

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();

        //QR Data is still f'ing return a string WHYYYYYYYY
        const rawData = await req.json();
        const qrData = JSON.parse(rawData.qrData); 

        // console.log("Parsed QR Data:", qrData);

        // console.log("Received QR Data:", JSON.stringify(qrData, null, 2));
        // console.log("Checking Secret Key:", qrData.secretKey === SECRET_KEY);

        const user = await User.findOne({ email: qrData.userEmail });
        console.log("User Query Result:", user);

        if (!qrData) {
            return NextResponse.json({ error: "Invalid QR data" }, { status: 400 });
        }
        if (!qrData.userEmail) {
            return NextResponse.json({ error: "Invalid User Email data" }, { status: 400 });
        }

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        if (user.attendanceMarkedAt || user.attendance) {
            return NextResponse.json({ error: "Attendance already marked" }, { status: 400 });
        }
        if (qrData.secretKey.trim() !== SECRET_KEY.trim()) {
            console.log("Secret Key Mismatch:", qrData.secretKey);
            return NextResponse.json({ error: "Invalid QR code" }, { status: 400 });
        }

        user.attendanceMarkedAt = new Date();
        user.attendance = true;
        await user.save();

        await sendAttendanceEmail(
            user.email, 
            user.name, 
            user.phone, 
        );

        return NextResponse.json({ message: "Attendance marked successfully", success:true }, { status: 200 });

    } catch (error) {
        console.log("Error is: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}