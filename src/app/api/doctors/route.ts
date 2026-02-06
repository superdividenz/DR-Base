import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get("specialty") ?? undefined;

    const doctors = await prisma.doctor.findMany({
      where: specialty ? { specialty } : undefined,
      include: {
        employers: { include: { organization: true } },
        payments: {
          include: { payer: true },
          orderBy: { year: "desc" },
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(doctors);
  } catch (e) {
    console.error("GET /api/doctors", e);
    return NextResponse.json(
      { error: "Failed to fetch doctors" },
      { status: 500 }
    );
  }
}
