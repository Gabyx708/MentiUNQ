import { Link } from "react-router-dom";
import unqLogo from "../../assets/mentiLogo.svg";
import { useState } from "react";
import "./index.css";
import { Form } from "react-bootstrap";
import Navbar from "../../components/Edit/NavBar/NavBar";
import addUser from '../../services/Users/AddUser';
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {

  const [codigo, setCodigo] = useState();
  const {user} = useAuth0();

  addUser();
  

  return (
    <div className="home">
      <header className="header-home">
        <Navbar/>
      </header>
      <div className="body-home">
        <img src={unqLogo} alt="logo" className="img-logo-home" />
        <div className="container-input-code">
          <Form.Control
            onChange={(e) => setCodigo(e.target.value)}
            type="text"
            placeholder="Introduce el código aquí"
          />
          <Link to={"/view/presentations/" + codigo}>
            <button className="btn-custom"> Unirse</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
