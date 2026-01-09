import { NextResponse } from "next/server";

export async function POST() {
  console.log("Inside log out")
  const response = NextResponse.json(
    { message: "Admin logged out" },
    { status: 200 }
  );

  response.cookies.set({
    name: "admin-auth",
    value: "",
    maxAge: 0,
    expires: new Date(0),
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  console.log("SHOULD DELETE MAN")

  return response;
}
