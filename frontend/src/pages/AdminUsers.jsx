import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from 'react-toastify'
import swal from 'sweetalert2'
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const { token ,user ,isLoading} = useAuth();
  const [users, setUsers] = useState([]);


  // if (isLoading) {
  //   return <h1 className="text-4xl font-bold text-green-600 text-center mb-6">Loading ...</h1>;
  // }

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  const getAllUsersData = async () => {
    try {
      const response = await fetch("https://itconnect-backend-idyu.onrender.com/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      setUsers(data);
      setIsLoadingUser(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://itconnect-backend-idyu.onrender.com/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      // const data = await response.json();
      getAllUsersData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {users.length > 0 ? (
        <>
          <h1 className="text-center font-bold text-3xl mb-3">User Data</h1>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border-4 px-1 py-1">Id</th>
                <th className="border-4 px-1 py-1">Username</th>
                <th className="border-4 px-1 py-1">Phone</th>
                <th className="border-4 px-1 py-1">Email</th>
                <th className="border-4 px-1 py-1">Is Admin</th>
                <th className="border-4 px-1 py-1">Update</th>
                <th className="border-4 px-1 py-1">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => (
                <tr key={index}>
                  <td className="border-2 px-1 py-1 text-center">
                    {curUser._id}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                    {curUser.username}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                    {curUser.email}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                    {curUser.phone}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                    {curUser.isAdmin ? "Yes" : "No"}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                   <Link to={`/admin/users/${curUser._id}/edit`} >Edit</Link>
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                  <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"

                      onClick={() => {
                        if(user._id === curUser._id){
                          toast.error("You can't delete yourself")
                          return;
                        }
                        if (curUser.isAdmin) {
                          swal.fire({
                            title: "Are you sure?",
                            text: "Do you really want to delete this Admin?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#d33",
                            cancelButtonColor: "#3085d6",
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "No, cancel!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteUser(curUser._id);
                              swal.fire("Deleted!", "Admin has been deleted.", "success");
                            }
                          });
                        } else {
                          deleteUser(curUser._id);
                        }
                      }}
                      

                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h2 className="text-center font-bold text-3xl mb-3">Loading...</h2>
      )}
    </>
  );
};
