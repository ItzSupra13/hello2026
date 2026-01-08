import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { sendRegistrationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { name, email, phone, department, year, password, university } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    
    const newUser = new User({
      name,
      email,
      phone,
      university,
      department,
      year,
      password,
    });

    await newUser.save();

    await sendRegistrationEmail(email, name, phone, department);

    // issue auth cookie like login
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );

    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch {
    // console.log("Error during registration:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
