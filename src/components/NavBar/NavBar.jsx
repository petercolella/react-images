import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/public"}>
            Public Folder
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/src"}>
            Src Folder
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/src-require"}>
            Src Folder Using Require
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/petercolella/react-images"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
