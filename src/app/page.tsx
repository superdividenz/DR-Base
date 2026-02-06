import Link from "next/link";
import { DoctorCard } from "@/components/DoctorCard";
import { prisma } from "@/lib/prisma";
import { toDoctor } from "@/lib/doctor";

async function getSpecialties(): Promise<string[]> {
  const rows = await prisma.doctor.findMany({
    select: { specialty: true },
    distinct: ["specialty"],
    orderBy: { specialty: "asc" },
  });
  return rows.map((r) => r.specialty);
}

async function getDoctors() {
  return prisma.doctor.findMany({
    include: {
      employers: { include: { organization: true } },
      payments: { include: { payer: true } },
    },
    orderBy: { name: "asc" },
  });
}

export default async function Home() {
  let specialties: string[] = [];
  let doctors: Awaited<ReturnType<typeof getDoctors>> = [];
  try {
    [specialties, doctors] = await Promise.all([
      getSpecialties(),
      getDoctors(),
    ]);
  } catch {
    // DB not connected (e.g. first deploy before DATABASE_URL)
  }
  const featured = doctors.slice(0, 3);

  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-stone-200 bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Doctor tracking
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Track physicians by specialty, where they work, who pays them, and
            how much they’re paid.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/doctors"
              className="rounded-lg bg-teal-600 px-5 py-2.5 font-medium text-white transition hover:bg-teal-700"
            >
              Browse doctors
            </Link>
            <a
              href="#specialties"
              className="rounded-lg border border-stone-300 bg-white px-5 py-2.5 font-medium text-stone-700 transition hover:bg-stone-50"
            >
              View specialties
            </a>
          </div>
        </div>
      </section>

      {specialties.length > 0 && (
        <section id="specialties" className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold text-stone-900">
              Specialties
            </h2>
            <p className="mt-1 text-stone-600">
              Filter doctors by specialty.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {specialties.map((s) => (
                <Link
                  key={s}
                  href={`/doctors?specialty=${encodeURIComponent(s)}`}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-stone-200 bg-stone-50/50 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-stone-900">
            Featured physicians
          </h2>
          <p className="mt-1 text-stone-600">
            A few of the doctors in the tracking database.
          </p>
          {featured.length === 0 ? (
            <p className="mt-6 text-stone-500">
              No doctors yet. Set up PostgreSQL, run migrations and seed, then
              refresh.
            </p>
          ) : (
            <>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={toDoctor(doctor)} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/doctors"
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  View all doctors →
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
