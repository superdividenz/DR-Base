import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="font-semibold text-stone-900">
              Doctor tracking
            </Link>
            <p className="mt-1 text-sm text-stone-500">
              Track physicians by specialty, workplace, and pay.
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-stone-600">
            <Link href="/" className="transition hover:text-stone-900">
              Home
            </Link>
            <Link href="/doctors" className="transition hover:text-stone-900">
              Our Doctors
            </Link>
          </nav>
        </div>
        <p className="mt-8 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} DR Details. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
