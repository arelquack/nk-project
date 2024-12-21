import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export async function GET() {
    try {
      const { data, error } = await supabase.from("events").select("*");
  
      if (error) throw new Error(error.message);
  
      return NextResponse.json(data, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        { error: `Failed to fetch events: ${(err as Error).message}` },
        { status: 500 }
      );
    }
}
  
export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { nama_event, deskripsi, lokasi, tanggal_waktu } = body;
  
      if (!nama_event || !deskripsi || !lokasi || !tanggal_waktu) {
        return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
      }
  
      const { data, error } = await supabase
        .from("events")
        .insert([{ nama_event, deskripsi, lokasi, tanggal_waktu }]);
  
      if (error) throw error;
  
      return NextResponse.json(data, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

  export async function DELETE(req: Request) {
    try {
      const body = await req.json();
      const { id } = body;
  
      if (!id) {
        return NextResponse.json(
          { error: "Event ID is required for deletion." },
          { status: 400 }
        );
      }
  
      const { error } = await supabase.from("events").delete().eq("id", id);
  
      if (error) throw new Error(error.message);
  
      return NextResponse.json({ message: "Event deleted successfully!" }, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        { error: `Failed to delete event: ${(err as Error).message}` },
        { status: 500 }
      );
    }
  }
  