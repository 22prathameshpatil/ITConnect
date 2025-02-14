import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let isLoggedIn = !!token;

  const storeTokenInLocalStorage = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const logOutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setServices([]);
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch("https://itconnect-backend-idyu.onrender.com/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);  
      }
    } catch (error) {
      setIsLoading(false);  
    }
  };
  

  const getServices = async () => {
    try {
      const response = await fetch("https://itconnect-backend-idyu.onrender.com/api/service", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        setServices(res_data.response);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServices();
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLocalStorage,
        logOutUser,
        isLoggedIn,
        user,
        services,
        token,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
