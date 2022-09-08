import React from "react";
import "./NavBar.css";

function Navbar() {

  return (
    <header>
      <nav className="navbar">
      <ul className="nav-menu">
          <li className="nav-item">
             <button className="btn">Crear presentación</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
