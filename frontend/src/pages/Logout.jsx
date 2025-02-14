import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  useEffect(() => {
    logOutUser();
    navigate("/", { replace: true });  // Ensures smooth navigation without adding to history
  }, []);  // Remove logOutUser from dependency array

  return null;  // No need for empty fragments
};
