import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
