import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const publicRoutes = ["/login"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith("/mgt"); // Dynamically check for /mgt routes
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  // Redirect to login if accessing a protected route without a valid session
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect to dashboard if accessing a public route while logged in
  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/mgt/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}
