import NavBar from "./components/NavBar";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

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
            <main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
