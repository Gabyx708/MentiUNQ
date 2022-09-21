import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

export default function HeadPresentation({
  currentPresentation,
  handlePresentationChange,
}) {
  const [newTitle, setNewTitle] = useState(currentPresentation.title);
  useEffect(() => {
    currentPresentation.title = newTitle;
    handlePresentationChange(currentPresentation);
  }, [newTitle]);

  return (
    <div className="header-presentation">
      <header className="container-head-1">
        <div className="container-title-back">
          <Link to="/">
            <Button variant="outline-secondary">Volver</Button>
          </Link>
          <div className="form">
            <input
              className="input"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <span className="input-border"></span>
          </div>
          {/* <Form.Control
            type="text"
            style={{ width: "22rem" }}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          /> */}
        </div>
        <div className="container-buttons-shared-presentation">
          <Button>Compartir</Button>
          <Button variant="outline-success">Presentar</Button>{" "}
        </div>
      </header>
      <div className="container-head-2">
        <Button variant="outline-info">Nueva slide</Button>
      </div>
    </div>
  );
}
