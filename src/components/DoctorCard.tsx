import Link from "next/link";
import type { Doctor } from "@/types/doctor";
import { formatAmount, totalPaymentsCents } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const workplaces = doctor.employers.map((e) => e.organization.name).join(", ");
  const totalCents = totalPaymentsCents(doctor.payments);
  const hasPay = totalCents > 0;

  return (
    <Link
      href={`/doctors/${doctor.id}`}
      className="group block rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-stone-900 group-hover:text-teal-700">
              {doctor.name}
            </h3>
          </div>
          <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
            {doctor.specialty}
          </span>
        </div>
        {workplaces && (
          <p className="text-sm text-stone-600">
            <span className="font-medium text-stone-500">Works at:</span>{" "}
            {workplaces}
          </p>
        )}
        {hasPay && (
          <p className="text-sm font-medium text-stone-700">
            Total tracked pay: {formatAmount(totalCents)}
          </p>
        )}
      </div>
    </Link>
  );
}
