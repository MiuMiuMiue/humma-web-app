// src/components/BottomPanel.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaMap, FaStore, FaUser } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";

import "../styles/bottomPanel.css";

function BottomPanel() {
  return (
    <nav className="BottomPanel">
      <NavLink to="/" className="nav-item">
        <FaHome className="nav-icon" />
      </NavLink>
      <NavLink to="/map" className="nav-item">
        <FaMap className="nav-icon" />
      </NavLink>
      <NavLink to="/market" className="nav-item">
        <FaStore className="nav-icon" />
      </NavLink>
      <NavLink to="/profile" className="nav-item">
        <FaUser className="nav-icon" />
      </NavLink>
      <NavLink to="/setting" className="nav-item">
        <RiSettings5Fill size={30} className="nav-icon" />
      </NavLink>
    </nav>
  );
}

export default BottomPanel;
