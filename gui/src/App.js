// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopPanel from "./components/topPanel";
import BottomPanel from "./components/bottomPanel"; 
import Home from "./pages/home";
import Map from "./pages/map";
import Market from "./pages/market";
import Profile from "./pages/profile";
import "./styles/global.css";

function App() {
    return (
        <Router>
            <div className="app">
                <TopPanel />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/map" element={<Map />} />
                        <Route path="/market" element={<Market />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>
                <BottomPanel />
            </div>
        </Router>
    );
}

export default App;
