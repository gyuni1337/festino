
import clientPromise from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("festino");
  const clubs = await db.collection("clubs").find({}).toArray();
  return NextResponse.json(clubs);
}