import React, { useEffect } from "react";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
  const { token } = useAuth();
  const [contacts, setContacts] = React.useState([]);

  const getAllContactsData = async () => {
    try {
      const promise = await fetch("http://localhost:8000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await promise.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async(id)=>{
    try {
      const promise = await fetch(`http://localhost:8000/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers: {
          Authorization: token,
        },  
      });
      const data = await promise.json();
      if(data){
      getAllContactsData();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllContactsData();
  }, []);

  return (
    <>
      {contacts.length > 0 ? (
        <>
          <h1 className="text-center font-bold text-3xl mb-3">Contact Data</h1>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border-4 px-1 py-1">Id</th>
                <th className="border-4 px-1 py-1">Username</th>
                <th className="border-4 px-1 py-1">Email</th>
                <th className="border-4 px-1 py-1">message</th>
                <th className="border-4 px-1 py-1">Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td className="border-2 px-1 py-1 text-center">
                    {contact._id}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                    {contact.username}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                    {contact.email}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                    {contact.message}
                  </td>
                  <td className="border-2 px-1 py-1 text-center">
                  <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                      onClick={() => {
                              deleteContact(contact._id);
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
