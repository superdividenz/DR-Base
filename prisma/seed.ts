import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.doctorPayment.deleteMany();
  await prisma.doctorEmployer.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.organization.deleteMany();

  const org1 = await prisma.organization.create({
    data: { id: "org-downtown-mc", name: "Downtown Medical Center" },
  });
  const org2 = await prisma.organization.create({
    data: { id: "org-riverside", name: "Riverside Surgical Associates" },
  });
  const org3 = await prisma.organization.create({
    data: { id: "org-childrens", name: "Children's Health Pavilion" },
  });
  const org4 = await prisma.organization.create({
    data: { id: "org-heart", name: "Heart & Vascular Institute" },
  });
  const org5 = await prisma.organization.create({
    data: { id: "org-state-health", name: "State Health System" },
  });

  const d1 = await prisma.doctor.create({
    data: { id: "doc-chen", name: "Dr. Sarah Chen", specialty: "Internal Medicine" },
  });
  const d2 = await prisma.doctor.create({
    data: { id: "doc-okonkwo", name: "Dr. James Okonkwo", specialty: "General Surgery" },
  });
  const d3 = await prisma.doctor.create({
    data: { id: "doc-vasquez", name: "Dr. Elena Vasquez", specialty: "Pediatrics" },
  });
  const d4 = await prisma.doctor.create({
    data: { id: "doc-torres", name: "Dr. Michael Torres", specialty: "Cardiology" },
  });

  await prisma.doctorEmployer.createMany({
    data: [
      { doctorId: d1.id, organizationId: org1.id },
      { doctorId: d1.id, organizationId: org5.id },
      { doctorId: d2.id, organizationId: org2.id },
      { doctorId: d3.id, organizationId: org3.id },
      { doctorId: d4.id, organizationId: org4.id },
    ],
  });

  await prisma.doctorPayment.createMany({
    data: [
      { doctorId: d1.id, payerId: org1.id, amountCents: 280000, period: "annual", year: 2024 },
      { doctorId: d1.id, payerId: org5.id, amountCents: 45000, period: "annual", year: 2024 },
      { doctorId: d2.id, payerId: org2.id, amountCents: 420000, period: "annual", year: 2024 },
      { doctorId: d3.id, payerId: org3.id, amountCents: 195000, period: "annual", year: 2024 },
      { doctorId: d4.id, payerId: org4.id, amountCents: 510000, period: "annual", year: 2024 },
    ],
  });

  console.log("Seed complete.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
