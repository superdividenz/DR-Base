import type { Doctor } from "@/types/doctor";
import type { Doctor as PrismaDoctor } from "@prisma/client";
import type { DoctorEmployer, DoctorPayment } from "@prisma/client";

type DoctorWithRelations = PrismaDoctor & {
  employers: (DoctorEmployer & { organization: { id: string; name: string } })[];
  payments: (DoctorPayment & { payer: { id: string; name: string } })[];
};

export function toDoctor(d: DoctorWithRelations): Doctor {
  return {
    id: d.id,
    name: d.name,
    specialty: d.specialty,
    createdAt: d.createdAt.toISOString(),
    employers: d.employers.map((e) => ({
      organizationId: e.organizationId,
      organization: e.organization,
    })),
    payments: d.payments.map((p) => ({
      id: p.id,
      amountCents: p.amountCents,
      period: p.period,
      year: p.year,
      payer: p.payer,
    })),
  };
}
