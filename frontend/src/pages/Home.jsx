import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Welcome to Our IT Solutions
      </h1>
      
      <div className="text-center max-w-2xl">
        <p className="text-lg text-gray-700 mb-4">
          We provide cutting-edge IT solutions tailored to your business needs, ensuring efficiency, security, and growth.
        </p>
        <p className="text-gray-600 mb-6">
          Our expertise spans web development, cloud computing, AI solutions, and cybersecurity. Let us help you transform your digital presence and achieve your business goals.
        </p>
      </div>

      <div className="flex space-x-4 mb-8">
        <Link to="/contact">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Contact Us
          </button>
        </Link>
        <Link to="/service">
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
            Our Services
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-2xl font-bold text-blue-600">50+</div>
          <p className="text-gray-600">Enterprise Clients</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-2xl font-bold text-blue-600">100,000+</div>
          <p className="text-gray-600">Satisfied Customers</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-2xl font-bold text-blue-600">500+</div>
          <p className="text-gray-600">Experienced Developers</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="text-2xl font-bold text-blue-600">24/7</div>
          <p className="text-gray-600">Technical Support</p>
        </div>
      </div>
    </section>
  );
};

