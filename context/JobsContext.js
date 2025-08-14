'use client';

import { createContext, useContext, useState, useEffect } from "react";

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("https://akil-backend.onrender.com/opportunities/search");
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider value={{ jobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);