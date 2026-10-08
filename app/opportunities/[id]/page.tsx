import { opportunities } from '@/app/data/opportunities';
import Link from 'next/link';

type OpportunityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunitiesIdPage({ params }: OpportunityPageProps) {
  const { id } = await params;
  const opportunity = opportunities.find(
    (opportunity) => opportunity.id === id,
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {opportunity ? (
        <>
          <h1 className="mb-2 text-3xl font-bold">{opportunity.title}</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Company: {opportunity.company}
          </p>
          <p className="text-neutral-500 dark:text-neutral-400">
            Location: {opportunity.location}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Description: {opportunity.description}
          </p>
          <Link
            href="/opportunities"
            className="mt-4 inline-block px-4 py-2 text-black transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            🔙 Back to Opportunities
          </Link>
        </>
      ) : (
        <>
          <p>Opportunity not found </p>

          <Link
            href="/opportunities"
            className="inline-block px-4 py-2 text-black transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
           🔙 Back to Opportunities
          </Link>
        </>
      )}
    </div>
  );
}