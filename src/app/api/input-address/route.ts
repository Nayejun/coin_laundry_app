import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose.mjs";
import InputAddress from "@/lib/models/InputAddress";

export async function GET(req: NextRequest) {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);
  const phoneNumber = searchParams.get('phoneNumber');

  try {
    const query = phoneNumber ? { phoneNumber } : {};
    const inputAddresses = await InputAddress.find(query);
    return NextResponse.json(inputAddresses, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const data = await req.json();

  try {
    const inputAddress = new InputAddress(data);
    await inputAddress.save();
    return NextResponse.json(inputAddress, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
