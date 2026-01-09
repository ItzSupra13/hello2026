//gets the authentication status

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const authToken = req.cookies.get("authToken")?.value;
    const adminToken = req.cookies.get("admin-auth")?.value;

    if (adminToken){
      return NextResponse.json({
        authenticated: true,
        admin: true,
      });
    }
    if (authToken){
      const decoded = jwt.verify(
        authToken,
        process.env.JWT_SECRET!
      ) as { userId: string; email: string };
  
      return NextResponse.json({
        authenticated: true,
        admin: false
      });
    }

    return NextResponse.json({
      authenticated: false,
      role: null,
    });

  } catch {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }
}