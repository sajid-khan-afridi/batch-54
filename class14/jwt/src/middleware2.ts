import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const token = false;

  if (token && pathname !== "/profile")
    return NextResponse.redirect(new URL("/profile", request.url));

  if (!token && pathname !== "/login")
    return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/login/:path*", "/profile/"],
};
