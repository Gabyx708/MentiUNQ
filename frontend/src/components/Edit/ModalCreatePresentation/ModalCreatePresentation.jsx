import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import useCreatePresentation from "../../../hooks/useCreatePresentation";
import {LoginButton} from "../../Login/LoginButton";
import {useAuth0} from '@auth0/auth0-react';

export default function ModalCreatePresentation() {
  
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const { presentation, loading, setTitle } = useCreatePresentation({ name });
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {user,isAuthenticated} = useAuth0();
  let activo = false;

  const handleCreate = () => {
    if (name && name.length >0) {
      setTitle(name);
    }
  };
  useEffect(() => {
    if (presentation) {
      handleClose()
      navigate('/edit/presentation/'+presentation.id)
    }
  }, [presentation]);

  return (
    <>
      <button className="btn-custom"  onClick={handleShow}>
        Crear presentación
      </button>
      <div className="px-2">
      <LoginButton />
      </div>
      {isAuthenticated ? console.log("si ,aparecer ventana") : console.log("no , mostrar ventana registro")}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-black flex flex-row justify-center w-full">
          <Modal.Title>Nombre de tu presentación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className=" rounded-md p-2 w-80 shadow-md text-black"
            placeholder="Ingresá el nombre de tu presentación"
            onChange={(e) => setName(e.target.value)}
          ></input>
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
