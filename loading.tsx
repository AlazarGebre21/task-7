"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-6"></div>

      {/* Loading text */}
      <h2 className="text-2xl font-semibold text-gray-800 animate-pulse">
        Loading, please wait...
      </h2>

      {/* Optional description */}
      <p className="text-gray-500 mt-2 text-center max-w-xs">
        Fetching the latest jobs and preparing your dashboard.
      </p>
    </div>
  );
}
