"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-6">
      {/* Icon */}
      <div className="bg-red-100 text-red-600 rounded-full p-4 mb-6">
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
          />
        </svg>
      </div>

      {/* Error message */}
      <h1 className="text-3xl font-bold text-red-700 mb-2 text-center">Something went wrong</h1>
      <p className="text-red-500 mb-6 text-center max-w-md">
        We encountered an unexpected error. Please try again or contact support if the problem persists.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Retry
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
