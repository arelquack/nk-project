import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Get all members
export async function GET() {
  const { data, error } = await supabase.from("new_members").select("*");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// Add new member
export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await supabase.from("new_members").insert([body]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
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
