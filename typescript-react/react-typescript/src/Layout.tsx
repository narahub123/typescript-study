import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
