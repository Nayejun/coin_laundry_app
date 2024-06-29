import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose.mjs";
import InputAddress from "@/lib/models/InputAddress";

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	await connectToDatabase();
	const { id } = params;

	try {
		const inputAddress = await InputAddress.findById(id);
		if (!inputAddress) {
			return NextResponse.json(
				{ message: "InputAddress not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(inputAddress, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message },
			{ status: 500 }
		);
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	await connectToDatabase();
	const { id } = params;
	const data = await req.json();

	try {
		const inputAddress = await InputAddress.findByIdAndUpdate(
			id,
			data,
			{
				new: true,
				runValidators: true,
			}
		);
		if (!inputAddress) {
			return NextResponse.json(
				{ message: "InputAddress not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(inputAddress, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message },
			{ status: 400 }
		);
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	await connectToDatabase();
	const { id } = params;

	try {
		const inputAddress = await InputAddress.findByIdAndDelete(
			id
		);
		if (!inputAddress) {
			return NextResponse.json(
				{ message: "InputAddress not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(
			{ message: "InputAddress deleted successfully" },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message },
			{ status: 500 }
		);
	}
}
