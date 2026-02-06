// API response shapes (from Prisma includes)

export interface Organization {
  id: string;
  name: string;
}

export interface DoctorEmployer {
  organizationId: string;
  organization: Organization;
}

export interface DoctorPayment {
  id: string;
  amountCents: number;
  period: string;
  year: number | null;
  payer: Organization;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  createdAt: string;
  employers: DoctorEmployer[];
  payments: DoctorPayment[];
}

export function formatAmount(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function totalPaymentsCents(payments: DoctorPayment[]): number {
  return payments.reduce((sum, p) => sum + p.amountCents, 0);
}
