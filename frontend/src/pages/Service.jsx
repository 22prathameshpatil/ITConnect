import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const Service = () => {

  const { services } = useAuth();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
    Our Services
  </h1>

  {services.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      {services.map((item) => (
        <div key={item._id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">{item.service}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
          <p className="text-lg font-bold text-blue-600 mt-4">₹{item.price}</p>
          <p className="text-gray-500 text-sm">Provided by: {item.provider}</p>
        </div>
      ))}
    </div>
  ) : (
    // Separate flex container for centering
    <div className="flex items-center justify-center h-[50vh] w-full">
      <p className="text-gray-600 text-4xl font-bold">Loading...</p>
    </div>
  )}
</section>

  );
};
