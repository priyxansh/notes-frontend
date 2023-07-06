import NavBar from "./components/NavBar";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    // Todo
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        setIsAuth(localStorage.getItem("auth-token") ? true : false);
    }, []);

    useEffect(() => {
        console.log(isAuth);
    }, [isAuth]);

    return (
        <Router>
            <header>
                <NavBar title={"Sync"} />
            </header>
        </Router>
    );
}

export default App;
