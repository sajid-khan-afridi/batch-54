import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const token = request.cookies.get("jwt-token")?.value;
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRETE);
      const { payload, protectedHeader } = await jwtVerify(token, secret);
      console.log("protection header= ", protectedHeader);
      console.log("payload= ", payload);

      if (pathname !== "/profile")
        return NextResponse.redirect(new URL("/profile", request.url));
    } catch (e) {
      console.log("invalid token");
    }
  }

  if (!token && pathname !== "/login")
    return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/login/:path*", "/profile/"],
};
