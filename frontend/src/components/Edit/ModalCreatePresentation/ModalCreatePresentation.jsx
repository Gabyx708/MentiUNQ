import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import useCreatePresentation from "../../../hooks/useCreatePresentation";

export default function ModalCreatePresentation() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const { presentation, setTitle } = useCreatePresentation({ name });
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreate = () => {
    if (name && name.length > 0) {
      setTitle(name);
    }
  };
  useEffect(() => {
    if (presentation) {
      handleClose();
      navigate("/edit/presentation/" + presentation.id);
    }
  }, [presentation]);

  return (
    <>
      <button className="btn-custom" onClick={handleShow}>
        Crear presentación
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-black flex flex-row justify-center w-full">
          <Modal.Title>Nombre de tu presentación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            className=" rounded-md p-2 w-80 shadow-md text-black"
            placeholder="Ingresá el nombre de tu presentación"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-custom danger" onClick={handleClose}>
            Cerrar
          </button>
          <button className="btn-custom dark" onClick={handleCreate}>
            Crear
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
