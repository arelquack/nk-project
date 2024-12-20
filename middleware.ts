import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function middleware(req: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Mendapatkan session dari cookies
  const { data: { session } } = await supabase.auth.getSession();

  // Mengecek apakah session ada
  if (!session) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Jika user tidak login atau bukan admin, redirect ke login
  if (session.user?.user_metadata?.role !== "admin") {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Lanjutkan ke halaman jika sudah terverifikasi
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*", // Apply middleware to all admin pages
};
