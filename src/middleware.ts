import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname;
	
	const userToken = req.cookies.get("authToken");
	const adminToken = req.cookies.get("admin-auth");

	// Protects User Dashboard
	if (pathname.startsWith("/dashboard") && !userToken) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	// Allows Admin Login Page (Public)
	if (pathname.startsWith("/admin/login")) {
		return NextResponse.next();
	}

	// Allow Admin Login Api to respond
    if (pathname === "/api/admin/login") {
        return NextResponse.next();
  	}

	//Admin Entry
	const isAdminPath = pathname.startsWith("/admin");
	const isAdminApi = pathname.startsWith("/api/admin");
	if (isAdminPath || isAdminApi) {
		if (!adminToken) {
			return isAdminApi
				? NextResponse.json({ error: "Unauthorized bruh" }, { status: 401 })
				: NextResponse.redirect(new URL("/admin/login", req.url));
		}
	}
	return NextResponse.next();
}
export const config = {
	matcher: ["/dashboard/:path*",
		"/admin/:path*",
		"/api/admin/:path*",],
};
