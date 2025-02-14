import { Outlet, Link, NavLink, Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const AdminLayout = () => {
  const {user,isLoading} = useAuth();

  if (isLoading) {
    return <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Loading ...</h1>;
  }

  // if (!user.admin) {
  //   return <Navigate to="/" />;
  // }


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }>
            Home
          </NavLink>
          <NavLink to="/admin/users" className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }>
            Users
          </NavLink>
          <NavLink to="/admin/contacts" className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }>
            Contacts
          </NavLink>
          <NavLink to="/admin/services" className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }>
            Services
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};
