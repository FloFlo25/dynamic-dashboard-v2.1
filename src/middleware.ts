import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicPaths = [
	"/login",
	"/register",
	"/forgot-password",
	"/terms-and-conditions",
];

export async function middleware(req: NextRequest) {
	const { cookies, nextUrl } = req;
	const token = cookies.get("access_token");

	// If user is not logged in (no token) and tries to access a protected route
	if (!token && !publicPaths.includes(nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	// If user is logged in and tries to access public paths like /login, redirect them
	if (token && publicPaths.includes(nextUrl.pathname)) {
		return NextResponse.redirect(new URL("/", req.url));
	}

	// Proceed to the requested page if no redirection is needed
	return NextResponse.next();
}

export const config = {
	matcher: [
	  "/((?!api|_next/static|favicon.ico|.*\\..*).*)", // Exclude static files, API routes, and favicon
	],
  };
  
