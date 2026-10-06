"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Page = () => {
  const router = useRouter(); 

  const handleClick = () => {
    router.push('/opportunities'); 
  };

  return (
    <>
      <h1>Welcome to my career path</h1>
      <h2>This website to help me and others to find their career path in the future.</h2>
      <p>
        The goal is to build a website that can give them clarity and a practical way to move forward to find a job in two months.
      </p>
      
    
      <Link href="/plan">Plan</Link>
      
      <button onClick={handleClick}>Go to opportunities</button>
    </>
  );
};

export default Page;
