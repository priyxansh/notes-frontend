import React from "react";

const Settings = ({ isExpanded }) => {
    console.log(isExpanded);
    return (
        <section className={`settings ${isExpanded ? "expanded" : ""}`}>
            <ThemeSelection />
            <ColorSchemeSelection />
        </section>
    );
};

// Todo
const ThemeSelection = () => {
    return (
        <div className="theme-option">
            <span>Theme:</span>
            <span className="dummy">Light | Dark</span>
        </div>
    );
};

// Todo
const ColorSchemeSelection = () => {
    return (
        <div className="theme-option">
            <span>Color Scheme:</span>
            <span className="dummy">Light | Dark</span>
        </div>
    );
};

export default Settings;
