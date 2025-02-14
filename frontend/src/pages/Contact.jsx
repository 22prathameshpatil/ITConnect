import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user && userData) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (user) {
        try {
          const response = await fetch("https://itconnect-backend-idyu.onrender.com/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });

          if (response.ok) {
            toast.success("Contact Successfully");
            setContact(defaultContactFormData);
          } else {
            toast.error("Message must be at least 20 characters long");
          }
        } catch (error) {
          console.log("Error:", error);
        }
      } else {
        toast.error("Please Login First");
      }
    };

    
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        Have questions? Feel free to reach out to us by filling out the form
        below.
      </p>

      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="username"
            className="block font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={contact.username}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={contact.email}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            value={contact.message}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 h-24"
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
