import React from 'react'
import Link from 'next/link';
import { opportunities } from '../data/opportunities';

type Opportunity = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export const OpportunitiesPage = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold">Opportunities</h1>
      <ul className="flex flex-col gap-6" >
        {opportunities.map((opportunity) => (
          <li key={opportunity.id} className="mb-6" style={{ border: "1px ", padding: "10px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", margin: "10px" }}>
            <h2 className="text-xl font-semibold">{opportunity.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">company name :{opportunity.company}</p>
            <p className="text-neutral-500 dark:text-neutral-400"> location : {opportunity.location}</p>
            <Link href={`/opportunities/${opportunity.id}`} className="mt-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpportunitiesPage;
