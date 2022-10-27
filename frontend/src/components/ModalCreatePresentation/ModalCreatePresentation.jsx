import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalCreatePresentation({headerModal, children, onConfirm,confirmText,show,setShow}) {
 
 

  return (
    <>

      <Modal show={show} onHide={(e)=>setShow(false)}>
        <Modal.Header className="text-black flex flex-row justify-center w-full">
          <Modal.Title>{headerModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-custom danger" onClick={(e)=>setShow(false)}>
            Cerrar
          </button>
          <button className="btn-custom dark" onClick={onConfirm}>
            {confirmText}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
