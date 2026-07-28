import { NextResponse } from "next/server";
import { consultationSchema } from "@/components/forms/consultation-form";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = consultationSchema.parse(body);

    console.log("[CONSULTATION_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Data konsultasi berhasil diterima.",
        received: {
          name: validatedData.name,
          location: validatedData.location,
          description: validatedData.description,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[CONSULTATION_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Validasi data gagal atau format payload tidak sesuai.",
      },
      { status: 400 }
    );
  }
}
