import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function middleware(req: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const accessToken = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!accessToken) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const { data: user, error } = await supabase.auth.getUser(accessToken);
  if (error || !user || user.user_metadata?.role !== "admin") {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*", // Apply middleware to all admin pages
};
