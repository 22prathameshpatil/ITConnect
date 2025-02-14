import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <div className="w-full flex justify-center">
        <div className="w-[90%] max-w-[1400px] flex justify-between items-center px-8">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <NavLink to="/" className="hover:text-gray-300">
              Logo
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-8 text-xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "hover:text-gray-300"
                  }
                >
                  Service
                </NavLink>
              </li>

              {/* Authentication Links */}
              {isLoggedIn ? (
                <li>
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      isActive ? "text-red-400 font-bold" : "hover:text-gray-300"
                    }
                  >
                    Log Out
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "text-green-400 font-bold" : "hover:text-gray-300"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive ? "text-green-400 font-bold" : "hover:text-gray-300"
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
