import { useAuth0 } from "@auth0/auth0-react";
import "../../index.css";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      className="btn-custom"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      {" "}
      Cerrar sesión
      <FiLogOut />
    </button>
  );
}
