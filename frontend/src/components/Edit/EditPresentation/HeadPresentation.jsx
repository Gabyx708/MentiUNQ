import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./index.css";

export default function HeadPresentation({ presentation }) {
  useEffect(() => {
    console.log(
      "🚀 ~ file: HeadPresentation.jsx ~ line 7 ~ useEffect ~ presentation",
      presentation
    );
  }, [presentation]);
  return (
    <div className="header-presentation">
      <header className="container-head-1">
        <div className="container-title-back">
          <Button variant="outline-secondary">Volver</Button>
          <Form.Control
            type="text"
            style={{ width: "22rem" }}
            value={presentation.title}
            onChange={() => alert("test")}
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <div className="container-buttons-shared-presentation">
          <Button>Compartir</Button>
          <Button variant="outline-success">Presentar</Button>{" "}
        </div>
      </header>
      <div className="container-head-2">
        <Button variant="info">Nueva slide</Button>
      </div>
    </div>
  );
}
