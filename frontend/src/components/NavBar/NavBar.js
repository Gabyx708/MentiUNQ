import React from "react";
import "./NavBar.css";
import LogoutButton from "../../components/Logout/Logout";
import LoginButton from "../../components/Login/LoginButton";
function Navbar({ isAuthenticated, isLoading, user }) {
  return (
    <nav className="navbar">
      {isLoading ? (
        <ul className="nav-menu">
          <li className="nav-item">
            <LoginButton />
          </li>
        </ul>
      ) : isAuthenticated ? (
        <ul className="nav-menu">
          <li className="nav-item">
            <h2>Bienvenido, {user.given_name}!</h2>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </ul>
      ) : (
        <ul className="nav-menu">
          <li className="nav-item">
            <LoginButton />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
