import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./index.css";

export default function HeadPresentation({ currentPresentation,handlePresentationChange}) {

  const [newTitle, setNewTitle] = useState(currentPresentation.title);
  useEffect(() => {
   currentPresentation.title = newTitle
   handlePresentationChange(currentPresentation)
  }, [newTitle]);

  return (
    <div className="header-presentation">
      <header className="container-head-1">
        <div className="container-title-back">
          <Button variant="outline-secondary">Volver</Button>
          <Form.Control
            type="text"
            style={{ width: "22rem" }}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
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
