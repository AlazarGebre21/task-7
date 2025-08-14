'use client'; 

import React from "react";
import { notFound } from "next/navigation";
import { useJobs } from "@/context/JobsContext";

interface jobProps  {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  deadline: string;  // ISO date string
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  createdBy: string;
  orgID: string;
  datePosted: string; // ISO date string
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  orgPrimaryPhone: string;
  orgEmail: string;
  isPaid: boolean;
  average_rating: number;
  total_reviews: number;
  engagementType: string;
  paymentOption: {
    currency: string;
    paymentType: string;
  };
}


export default function JobDetail({ params }: { params: Promise<{ id: string }> }) {
  // Await the params to get the job ID
   const paramObj = React.use(params);
   const jobId = paramObj.id;
  
  
  // Use the JobsContext to get the jobs data 
 const { jobs } = useJobs();

 const job:jobProps | undefined = jobs.data.find((job:jobProps) => job.id === jobId);
 
  if (!job) return notFound();

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <section className="md:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p>{job.description}</p>

        <div>
          <h2 className="text-xl font-semibold">Responsibilities</h2>
          <p>{job.responsibilities}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Ideal Candidate</h2>
          <p>{job.idealCandidate}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">When & Where</h2>
          <p>{job.whenAndWhere}</p>
        </div>
      </section>

      <aside className="bg-gray-100 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <p>
          <strong>Posted on:</strong> {job.datePosted}
        </p>
        <p>
          <strong>Deadline:</strong> {job.deadline}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Start Date:</strong> {job.startDate}
        </p>
        <p>
          <strong>End_date:</strong> {job.endDate}
        </p>
        <p>
          <strong>Categories:</strong>
        </p>
        <ul className="list-disc list-inside ml-4">
          {job.categories.map((catagory, i) => (
            <li key={i}>{catagory}</li>
          ))}
        </ul>
        <p>
          <strong>Skills:</strong>
        </p>
        <ul className="list-disc list-inside ml-4">
          {job.requiredSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
<br/>
<br/>
      </aside>
    </main>
  );
}
