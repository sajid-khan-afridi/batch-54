import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    if (username === "admin" && password === "admin") {
      const secret = new TextEncoder().encode(process.env.JWT_SECRETE);
      const alg = "HS256";

      const jwt = await new SignJWT({ username, password })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);

      console.log(jwt);

      const response = NextResponse.json({ username, password });
      response.cookies.set({
        name: "jwt-token",
        value: jwt,
        httpOnly: true,
      });
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}
