import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-stone-900 transition hover:text-teal-700"
        >
          Doctor tracking
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-stone-600 transition hover:text-stone-900"
          >
            Home
          </Link>
          <Link
            href="/doctors"
            className="text-stone-600 transition hover:text-stone-900"
          >
            Doctors
          </Link>
        </nav>
      </div>
    </header>
  );
}
