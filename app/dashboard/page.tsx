import { opportunities } from '@/app/data/opportunities';
export default function DashboardPage() {
  return (
    <main>
      <h2 className="mb-2 text-2xl font-semibold">Overview</h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        A clear view of the steps you are taking toward your next opportunity.
      </p>

      <section className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Applications
        </p>
        <p className="my-2 text-4xl font-bold">{opportunities.length}</p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Every application is progress. Keep going—you are building momentum!
        </p>
      </section>
    </main>
  );
}
