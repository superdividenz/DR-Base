import Link from "next/link";

export default function DoctorNotFound() {
  return (
    <div className="px-4 py-16 text-center sm:px-6">
      <h1 className="text-2xl font-bold text-stone-900">Doctor not found</h1>
      <p className="mt-2 text-stone-600">
        We couldn’t find that physician. Try browsing our directory.
      </p>
      <Link
        href="/doctors"
        className="mt-6 inline-block font-medium text-teal-600 hover:text-teal-700"
      >
        View all doctors
      </Link>
    </div>
  );
}
