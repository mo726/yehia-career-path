import { opportunities } from '@/app/data/opportunities';
const appsatutsus = 
[  
 { id: 1,
  satuts : 'Applied'},
  { id: 2,
  satuts : 'Interviewing'},
  { id: 3,
  satuts : 'Offer'},
  { id: 4,
  satuts : 'Rejected'},
]

export default function ApplicationsPage() {
  return (
    <main>
      <h2 className="mb-2 text-2xl font-semibold">Applications</h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Keep track of the opportunities you are working toward.
      </p>

      <ul className="flex flex-col gap-4">
        {opportunities.map((opportunity) => (
          <li
            key={opportunity.id}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 className="text-lg font-semibold">{opportunity .title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {opportunity.company}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {opportunity.location}
            </p>
            <p className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              {appsatutsus[Math.floor(Math.random() * appsatutsus.length)].satuts}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
