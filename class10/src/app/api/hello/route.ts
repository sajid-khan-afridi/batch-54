import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   return new Response("Hello world!");
// }
export async function GET(req: NextRequest) {
  return NextResponse.json({ name: "John Doe" });
}
// post
export async function POST(req: NextRequest) {
  const { name } = await req.json();
  return new Response(`Hello ${name}`);
}
