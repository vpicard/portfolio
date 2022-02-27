import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <NavLink className={(navData) => navData.isActive ? "" : ""} to="/">
          Home
        </NavLink>
      </div>
      <div className="nav-right link-wrapper">
        <NavLink className={(navData) => navData.isActive ? "nav-active" : "link"} to="/about">
          About
        </NavLink>
        <NavLink className={(navData) => navData.isActive ? "nav-active" : "link"} to="/contact" >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
