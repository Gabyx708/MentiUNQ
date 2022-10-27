import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useCreatePresentation from "../../hooks/useCreatePresentation";
import usePresentations from "../../hooks/usePresentations";
import ModalCreatePresentation from "../ModalCreatePresentation/ModalCreatePresentation";
import TablePresentations from "../TablePresentations/TablePresentations";
import "./index.css";
export default function PanelControl({ user }) {
  const { presentations } = usePresentations({ user });
  const [name, setName] = useState("");
  const { presentation, setTitle } = useCreatePresentation({ user });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (name && name.length > 0) {
      setTitle(name);
    }
  };
  useEffect(() => {
    if (presentation) {
      setShow(false);
      navigate("/edit/presentation/" + presentation.id);
    }
  }, [presentation]);
  return (
    <div className="panel-control">
      <button className="btn-custom" onClick={(e) => setShow(true)}>
        Crear presentación
      </button>
      <ModalCreatePresentation
        show={show}
        setShow={setShow}
        confirmText={"Crear"}
        title={"Nombre de tu presentación"}
        onConfirm={handleCreate}
        children={
          <Form.Control
            type="text"
            className=" rounded-md p-2 w-80 shadow-md text-black"
            placeholder="Ingresá el nombre de tu presentación"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        }
      />
      <h4
        style={{
          borderBottom: " 2px solid gray",
          width: "100%",
          textAlign: "left",
        }}
      >
        Mis presentaciones
      </h4>
      {presentations && <TablePresentations presentations={presentations} />}
    </div>
  );
}
