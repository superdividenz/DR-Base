import { notFound } from "next/navigation";
import Link from "next/link";
import { formatAmount } from "@/types/doctor";
import { prisma } from "@/lib/prisma";
import { toDoctor } from "@/lib/doctor";

interface DoctorPageProps {
  params: Promise<{ id: string }>;
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const row = await prisma.doctor.findUnique({
    where: { id },
    include: {
      employers: { include: { organization: true } },
      payments: {
        include: { payer: true },
        orderBy: [{ year: "desc" }, { createdAt: "desc" }],
      },
    },
  });

  if (!row) notFound();
  const doctor = toDoctor(row);
  const workplaces = doctor.employers.map((e) => e.organization.name);

  return (
    <div className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/doctors"
          className="text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          ← Back to doctors
        </Link>

        <article className="mt-8 rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-stone-900">{doctor.name}</h1>
            <span className="inline-block w-fit rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
              {doctor.specialty}
            </span>
          </div>

          <div className="mt-8 space-y-6 border-t border-stone-200 pt-8">
            {workplaces.length > 0 && (
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                  Where they work
                </h2>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {workplaces.map((name) => (
                    <li
                      key={name}
                      className="rounded-lg bg-stone-100 px-3 py-1.5 text-sm text-stone-700"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                Who pays them / how much
              </h2>
              {doctor.payments.length === 0 ? (
                <p className="mt-2 text-stone-500">No payment records yet.</p>
              ) : (
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-stone-200 text-left text-stone-500">
                        <th className="pb-2 pr-4 font-medium">Payer</th>
                        <th className="pb-2 pr-4 font-medium">Amount</th>
                        <th className="pb-2 font-medium">Period / Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doctor.payments.map((p) => (
                        <tr
                          key={p.id}
                          className="border-b border-stone-100 text-stone-700"
                        >
                          <td className="py-2 pr-4">{p.payer.name}</td>
                          <td className="py-2 pr-4 font-medium">
                            {formatAmount(p.amountCents)}
                          </td>
                          <td className="py-2">
                            {p.period}
                            {p.year != null ? ` (${p.year})` : ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
