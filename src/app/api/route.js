import { NextResponse } from "next/server";
import DB from "@/lib/sample.json";

export async function GET() {
  return NextResponse.json(DB);
}
