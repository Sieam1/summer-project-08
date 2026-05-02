import { NextResponse } from "next/server";

export function middleware(req) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/my-profile", "/update-profile"],
};