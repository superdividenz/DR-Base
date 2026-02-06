import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      select: { specialty: true },
      distinct: ["specialty"],
      orderBy: { specialty: "asc" },
    });
    const specialties = doctors.map((d) => d.specialty);
    return NextResponse.json(specialties);
  } catch (e) {
    console.error("GET /api/specialties", e);
    return NextResponse.json(
      { error: "Failed to fetch specialties" },
      { status: 500 }
    );
  }
}
