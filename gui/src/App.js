import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TopPanel from "./components/topPanel";
import BottomPanel from "./components/bottomPanel";
import Home from "./pages/home";
import Map from "./pages/map";
import Market from "./pages/market";
import Profile from "./pages/profile";
import Setting from "./pages/setting";
import Membership from "./components/Membership";

import Register from "./pages/register";
import Login from "./pages/login";
import "./styles/global.css";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access-token');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
    const token = localStorage.getItem('access-token');
    console.log('Token:', token);
    if (!token) {
        return (
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        );
    }

    return (
        <Router>
            <div className="app">
                <TopPanel />
                    <main className="content">
                        <Routes>
                            <Route path="/" element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            } />
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            } />
                            <Route path="/setting" element={
                                <ProtectedRoute>
                                    <Setting />
                                </ProtectedRoute>
                            } />
                            <Route path="/membership" element={
                                <ProtectedRoute>
                                    <Membership />
                                </ProtectedRoute>
                            } />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </main>
                <BottomPanel />
            </div>
        </Router>
    );
}

export default App;
