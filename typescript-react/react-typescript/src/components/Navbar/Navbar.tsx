import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">lama dev</span>
      <div className="links">
        <Link to="#">Homepage</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
