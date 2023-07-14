import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import "../styles/Auth.css";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const validPaths = ["/auth/login", "/auth/signup"];

    const [pathname, setPathname] = useState(
        // To remove the ending "/" from the pathname
        location.pathname.replace(/\/$/g, "")
    );

    useEffect(() => {
        if (!validPaths.includes(pathname)) {
            setPathname("/auth/signup");
            navigate("/auth/signup");
        }
    }, []);

    const returnActiveFormComponent = () => {
        if (pathname === "/auth/login") {
            return <Login />;
        } else if (pathname === "/auth/signup") {
            return <SignUp />;
        }
    };

    return (
        <section className="login-form">
            <div className="active-section">{returnActiveFormComponent()}</div>
        </section>
    );
};

export default Auth;
