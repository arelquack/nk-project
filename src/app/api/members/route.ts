import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Get all members with pagination
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "10"); // default 10
  const offset = parseInt(searchParams.get("offset") || "0"); // default 0

  const { data, error } = await supabase
    .from("new_members")
    .select("*")
    .range(offset, offset + limit - 1);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// Add new member
export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse data dari body
    const { full_name, grade, email } = body;

    // Validasi data
    if (!full_name || !grade || !email) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Masukkan data ke tabel new_members di Supabase
    const { data, error } = await supabase.from("new_members").insert([
      { full_name, grade, email },
    ]);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ message: "New member added successfully.", data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Update member
export async function PUT(req: Request) {
  const body = await req.json();
  const { id, ...updates } = body;
  const { data, error } = await supabase.from("new_members").update(updates).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// Delete member
export async function DELETE(req: Request) {
  const { id } = await req.json();
  const { error } = await supabase.from("new_members").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Member deleted" }, { status: 200 });
}
