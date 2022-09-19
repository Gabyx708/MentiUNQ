import { Link } from "react-router-dom";
import unqLogo from "../../assets/mentiLogo.svg";
import { useState } from "react";
import "./index.css";
import ModalCreatePresentation from "../../components/Edit/ModalCreatePresentation/ModalCreatePresentation";
import { Form } from "react-bootstrap";

export default function Home() {
  const [codigo, setCodigo] = useState();

  return (
    <div className="home">
      <header className="header-home">
        <ModalCreatePresentation>Crear presentación</ModalCreatePresentation>
      </header>
      <div className="body-home">
        <img src={unqLogo} alt="logo" className="img-logo-home" />
        <div className="container-input-code">
          <Form.Control
            onChange={(e) => setCodigo(e.target.value)}
            type="text"
            placeholder="introduce el codigo aqui"
            // aria-describedby="passwordHelpBlock"
          />
          <Link to={"/view/presentations/" + codigo}>
            <button className="btn-custom"> Unirse</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
