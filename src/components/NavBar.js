import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            //   Aquí estamos haciendo una desustructuración de una propiedad que tiene NavLink para poder dar clases a los que estén seleccionados
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/user"
          >
            user
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
