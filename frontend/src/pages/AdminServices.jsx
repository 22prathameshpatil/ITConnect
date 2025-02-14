import React from "react";
import { useAuth } from "../store/auth";

export const AdminServices = () => {

    const { services } = useAuthh();

    return (
        <>
            <h1>This is Admin Services</h1>
        </>
    );
};