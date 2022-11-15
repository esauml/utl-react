import React, { useRef } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { Contacto } from "../types/Contacto";

export interface ProtectedRouteInterface {
    children: React.ReactNode;
    state: Contacto[];
    redirect?: string;
}

const ProtectedRoute = ({ children, state, redirect = "/" }: ProtectedRouteInterface) => {
    const { id } = useParams<{ id: string }>();


    const location = useLocation();
    const { isValid: valid } = location.state || { isValid: false };
    console.log('valid', valid);

    // check if there is a contact with the id
    const contacto = state.some((contacto) => String(contacto.id) === id);

    if (!valid || !contacto) {
        return <Navigate to={redirect} />;
    }


    return (children) as React.ReactElement;
};

export default ProtectedRoute;
