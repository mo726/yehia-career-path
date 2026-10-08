import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="mb-5 text-3xl font-bold">Your Dashboard</h1>
        <nav
          aria-label="Dashboard navigation"
          className="flex gap-3 border-b border-neutral-200 dark:border-neutral-800"
        >
          <Link
            href="/dashboard"
            className="border-b-2 border-transparent px-3 py-2 font-medium text-neutral-600 transition-colors hover:border-neutral-400 hover:text-foreground dark:text-neutral-400"
          >
            Overview
          </Link>
          <Link
            href="/dashboard/applications"
            className="border-b-2 border-transparent px-3 py-2 font-medium text-neutral-600 transition-colors hover:border-neutral-400 hover:text-foreground dark:text-neutral-400"
          >
            Applications
          </Link>
        </nav>
      </header>
      {children}
    </section>
  );
}
