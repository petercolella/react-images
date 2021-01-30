import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/home"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/public"}>
            Images from Public Folder
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/src"}>
            Images from Src Folder
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/src-require"}>
            Images from Src Folder Using Require
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
