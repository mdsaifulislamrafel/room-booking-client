/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="w-10 h-10 my-5 mx-auto animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>;
    }
    if (user) {
        return children
    }
    return <Navigate to={"/login"} state={location}></Navigate>
};

export default PrivateRoute;