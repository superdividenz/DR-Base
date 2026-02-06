-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorEmployer" (
    "doctorId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "DoctorEmployer_pkey" PRIMARY KEY ("doctorId","organizationId")
);

-- CreateTable
CREATE TABLE "DoctorPayment" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "payerId" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "period" TEXT NOT NULL,
    "year" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DoctorPayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DoctorEmployer" ADD CONSTRAINT "DoctorEmployer_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorEmployer" ADD CONSTRAINT "DoctorEmployer_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorPayment" ADD CONSTRAINT "DoctorPayment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorPayment" ADD CONSTRAINT "DoctorPayment_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
