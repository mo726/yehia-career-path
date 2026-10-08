import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
        Your next chapter starts here
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Find your career path with a plan that moves you forward.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        Get clarity, explore opportunities, and take practical steps toward your
        next role—one milestone at a time.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/plan"
          className="rounded-md bg-blue-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View your plan
        </Link>
        <Link
          href="/opportunities"
          className="rounded-md border border-neutral-300 px-5 py-3 font-semibold transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          Explore opportunities
        </Link>
      </div>
    </main>
  );
}
