import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Page Not Found</p>
      <div className="mt-6 space-x-4">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Return to Home
        </Link>
        <Link
          to="/contact"
          className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Report Problem
        </Link>
      </div>
    </section>
  );
};
