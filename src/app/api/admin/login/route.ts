import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try{
        const { email, password } = await req.json();
        const isValidPassword = bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || "");
        const isValidEmail = email === process.env.ADMIN_EMAIL;
        if ( !isValidEmail || !isValidPassword) {
            return NextResponse.json(
                { error: "Invalid admin credentials" },
                { status: 401 }
            );
        }
        const response = NextResponse.json({ 
            message: 'Login successful',  
            success: true
        });

        const token = jwt.sign(
            { role: "admin" },
            process.env.JWT_SECRET!,
            { expiresIn: "6h" }
        );
        
        response.cookies.set("admin-auth", token , {
          httpOnly: true,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: 60 * 60 * 6,
        });
        return response;
    }
    catch{
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}