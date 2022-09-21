import React from "react";
import ModalCreatePresentation from "../ModalCreatePresentation/ModalCreatePresentation";
import "./NavBar.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Loading/Loading";
import LogoutButton from "../../Logout/Logout";
import LoginButton from "../../Login/LoginButton";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("🚀 ~ file: NavBar.js ~ line 11 ~ Navbar ~ isLoading", isLoading);
  console.log(
    "🚀 ~ file: NavBar.js ~ line 11 ~ Navbar ~ isAuthenticated",
    isAuthenticated
  );

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
            <ModalCreatePresentation />
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
