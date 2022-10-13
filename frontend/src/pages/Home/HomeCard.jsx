import { Form } from "react-bootstrap";
import unqLogo from "../../assets/mentiLogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeCard() {
    
  const [codigo, setCodigo] = useState();
  console.log("🚀 ~ file: HomeCard.jsx ~ line 9 ~ HomeCard ~ codigo", codigo)

  return (
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
  );
}
