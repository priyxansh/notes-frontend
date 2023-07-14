import React from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <h1>
                <span className="accent">Sync</span> important notes with the
                cloud.
            </h1>
            <p>
                <span className="tagline">
                    {`Lorem ipsum dolor sit amet consectetur. `}
                </span>
                <span className="tagline">{`Lorem ipsum dolor sit amet.`}</span>
                <span className="tagline display-block">
                    {`Lorem ipsum dolor sit amet consectetur adipisicing.`}
                </span>
            </p>
            <div className="button-container">
                <button
                    className="login primary"
                    onClick={() => navigate("/auth/login/")}
                >
                    Login
                </button>
                <button
                    className="get-started primary"
                    onClick={() => navigate("/auth/signup/")}
                >
                    Get Started
                </button>
                <button className="github secondary">GitHub</button>
            </div>
        </section>
    );
};

export default Hero;
