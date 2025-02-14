import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdateUser = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const defaultUserFormData = {
    username: "",
    phone: "",
    email: "",
    isAdmin: false, 
  };

  const [user, setUser] = useState(defaultUserFormData);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await response.json();
    //   setUser({
    //     ...data,
    //     isAdmin: Boolean(data.isAdmin), // ✅ Ensure boolean
    //   });
    setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      setUser(defaultUserFormData);
      toast.success("User Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          User Data
        </h1>

        <form
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="username" className="block font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={user.username}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={user.email}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              value={user.phone}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
              onChange={handleInputChange}
            />
          </div>

          {/* ✅ Toggle switch for isAdmin */}
          <div className="flex items-center">
            <label htmlFor="isAdmin" className="block font-medium text-gray-700 mr-3">
              Is Admin
            </label>
            <input
              type="checkbox"
              name="isAdmin"
              id="isAdmin"
              checked={user.isAdmin}
              className="h-5 w-5 text-blue-600"
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Update
          </button>
        </form>
      </section>
    </>
  );
};
