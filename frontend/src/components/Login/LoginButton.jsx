import { useAuth0 } from "@auth0/auth0-react";
import "../../index.css";
import { FiLogIn } from "react-icons/fi";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
      <button className="btn-custom" onClick={() => loginWithRedirect()}>
        Iniciar sesión
        <FiLogIn />
      </button>
   
  );
}
