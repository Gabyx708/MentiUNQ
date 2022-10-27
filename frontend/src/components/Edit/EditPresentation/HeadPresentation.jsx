import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import { VscArrowLeft, VscVmRunning, VscLiveShare } from "react-icons/vsc";
import ModalCreatePresentation from "../../ModalCreatePresentation/ModalCreatePresentation";
import PanelOfTypes from "../../PanelOfTypes/PanelOfTypes";

export default function HeadPresentation({
  currentPresentation,
  handlePresentationChange,handleCreateSlide
}) {
  const [newTitle, setNewTitle] = useState(currentPresentation.title);
  const [show, setShow] = useState(false);
  const [typeSelected, setTypeSelected] = useState();

  useEffect(() => {
    currentPresentation.title = newTitle;
    handlePresentationChange(currentPresentation);
  }, [newTitle]);

  const handleCreate = () => {
    if (typeSelected) {
      let newSlide = {
        question: "",
        context: "",
        description: "",
        note: "",
        type: typeSelected.code,
        name: typeSelected.name,
      };
      setShow(false)
      handleCreateSlide(newSlide);
    }
  };
  return (
    <div className="header-presentation">
      <header className="container-head-1">
        <div className="container-title-back">
          <Link to="/">
            <Button variant="outline-secondary">
              {" "}
              <VscArrowLeft /> Volver
            </Button>
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
          <Button>
            <VscLiveShare />
            Compartir
          </Button>
          <Button variant="outline-success">
            {" "}
            <VscVmRunning />
            Presentar
          </Button>{" "}
        </div>
      </header>
      <div className="container-head-2">
        <Button variant="outline-info" onClick={(e) => setShow(true)}>
          Nueva slide
        </Button>
        {show && (
          <ModalCreatePresentation
            show={show}
            setShow={setShow}
            title={"Nueva slide"}
            confirmText={"Agregar slide"}
            onConfirm={handleCreate}
            children={
              show && (
                <PanelOfTypes
                  typeSelected={typeSelected}
                  setTypeSelected={setTypeSelected}
                />
              )
            }
          />
        )}
      </div>
    </div>
  );
}
