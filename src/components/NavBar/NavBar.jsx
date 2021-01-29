import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  navBar: {
    backgroundColor: "black",
    color: "white",
    padding: "0.5rem",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    margin: "0.5rem",
  },
};

const NavBar = () => {
  return (
    <div style={styles.navBar}>
      <NavLink style={styles.navLink} to={"/"}>
        Home
      </NavLink>
      {"  |  "}
      <NavLink style={styles.navLink} to={"/public"}>
        Images from Public Folder
      </NavLink>
      {"  |  "}
      <NavLink style={styles.navLink} to={"/src"}>
        Images from Src Folder
      </NavLink>
      {"  |  "}
      <NavLink style={styles.navLink} to={"/src-require"}>
        Images from Src Folder Using Require
      </NavLink>
    </div>
  );
};

export default NavBar;
