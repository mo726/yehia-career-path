import Link from "next/link";

type Milestone = {
  id: number;
  title: string;
  description: string;
  actions: string[];
};

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Prepare",
    description:
      "Lay a solid foundation by aligning your profile with market expectations.",
    actions: [
      "Update your CV to highlight measurable achievements and target role keywords.",
      "Organize your portfolio with 2-3 high-quality projects showing your actual impact.",
      "Finalize your target role based on current market demands and your core strengths.",
    ],
  },
  {
    id: 2,
    title: "Practice",
    description:
      "Bridge your skills gaps and build deep confidence for technical and behavioral interviews.",
    actions: [
      "Dedicate 2 hours daily to coding challenges, mock designs, or role-specific practical tasks.",
      "Conduct mock interviews with peers or use AI tools to refine your verbal storytelling.",
    ],
  },
  {
    id: 3,
    title: "Apply",
    description:
      "Execute a high-conversion job search strategy to land an offer within 2 months.",
    actions: [
      "Identify and shortlist 15-20 target companies matching your ideal career criteria.",
      "Submit tailored applications and track them in a spreadsheet, sending clean follow-up notes after 5 days.",
    ],
  },
];

export default function PlanPage() {
  return (
    <main className="mx-auto my-10 max-w-2xl px-5 max-sm:my-6">
      <Link
        href="/"
        className="mb-6 inline-block rounded-md border border-neutral-300 px-4 py-2 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:hover:bg-neutral-800"
      >
        ← Back to Home
      </Link>

      <h1 className="mb-2 text-3xl font-bold">Your 2-Month Career Roadmap</h1>
      <p className="mb-8 text-neutral-500">
        Follow these milestones sequentially to maximize your job search
        efficiency.
      </p>

      <ol className="flex flex-col gap-6">
        {milestones.map((milestone) => (
          <li
            key={milestone.id}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            <span className="mb-1.5 inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Step {milestone.id}
            </span>
            <h2 className="mb-2 text-xl font-semibold">{milestone.title}</h2>
            <p className="mb-4 italic text-neutral-600 dark:text-neutral-400">
              {milestone.description}
            </p>

            <ul className="flex list-disc flex-col gap-2.5 pl-5 leading-relaxed">
              {milestone.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </main>
  );
}