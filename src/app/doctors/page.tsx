import Link from "next/link";
import { DoctorCard } from "@/components/DoctorCard";
import { prisma } from "@/lib/prisma";
import { toDoctor } from "@/lib/doctor";

interface DoctorsPageProps {
  searchParams: Promise<{ specialty?: string }>;
}

export default async function DoctorsPage({ searchParams }: DoctorsPageProps) {
  const { specialty } = await searchParams;
  let doctors: Awaited<ReturnType<typeof prisma.doctor.findMany>> = [];
  try {
    doctors = await prisma.doctor.findMany({
      where: specialty ? { specialty } : undefined,
      include: {
        employers: { include: { organization: true } },
        payments: { include: { payer: true } },
      },
      orderBy: { name: "asc" },
    });
  } catch {
    // DB not connected
  }
  const list = doctors.map(toDoctor);

  return (
    <div className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Doctor tracking
        </h1>
        <p className="mt-2 text-stone-600">
          {specialty
            ? `Filtered by ${specialty}.`
            : "Browse physicians by specialty, workplace, and compensation."}
        </p>
        {specialty && (
          <Link
            href="/doctors"
            className="mt-2 inline-block text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            Clear filter
          </Link>
        )}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-12 text-center text-stone-500">
            No doctors found. Add a database, run migrations and seed, or clear
            the filter.
          </p>
        )}
      </div>
    </div>
  );
}
