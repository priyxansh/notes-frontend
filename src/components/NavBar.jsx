import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import Settings from "./Settings";

const NavBar = ({ title }) => {
    const [settingsExpanded, setSettingsExpanded] = useState(false);

    return (
        <nav className="navbar">
            <Link to={"/"} className="nav-logo">
                {title}
            </Link>
            <div className="settings-button-container">
                <button
                    className="settings-button"
                    onClick={() => setSettingsExpanded((prev) => !prev)}
                >
                    <BsFillGearFill />
                </button>
            </div>
            <Settings isExpanded={settingsExpanded} />
        </nav>
    );
};

export default NavBar;
