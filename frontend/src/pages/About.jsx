import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-gray-800 px-6 py-10">
      
      <h1 className="text-2xl font-semibold mb-2">
        Hello, {user ? user.username : "Guest"}
      </h1>

      <h2 className="text-5xl font-extrabold text-blue-600 text-center mb-6">
        Why Choose Us?
      </h2>

      <p className="max-w-3xl text-lg text-gray-600 text-center leading-relaxed mb-6">
        We specialize in crafting high-quality web solutions tailored to your business needs.
        Our expertise includes modern web technologies, intuitive UI/UX designs, and scalable architectures
        that ensure long-term success in the digital era.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/contact">
          <button className="px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </Link>
        <Link to="/service">
          <button className="px-6 py-3 text-lg font-medium bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">
            Our Services
          </button>
        </Link>
      </div>

    </section>
  );
};
