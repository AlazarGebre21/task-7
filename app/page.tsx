'use client'

import JobCard from "@/components/JobCard";
import { useJobs } from "@/context/JobsContext";

interface Job  {
  id: string;
  title: string;
  description: string;
  logoUrl: string;
};

export default function Home() {
  const { jobs } = useJobs();
  console.log(jobs);

  if (!jobs || jobs.length === 0) {
    return <div className="p-6">No jobs available.</div>;
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Opportunities</h1>
      {jobs.data
  .filter((job: Job) => job.title !== "Moroco" && job.title !== "Event 1")
  .map((job: Job) => (
    <JobCard
      key={job.id}
      id={job.id}
      title={job.title}
      description={job.description}
      image={job.logoUrl}
    />
))}

    </main>
  );
}
