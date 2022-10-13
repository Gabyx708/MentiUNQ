import React from "react";
import usePresentations from "../../hooks/usePresentations";
import ModalCreatePresentation from "../ModalCreatePresentation/ModalCreatePresentation";
import TablePresentations from "../TablePresentations/TablePresentations";
import "./index.css";
export default function PanelControl({ user }) {
  const { presentations } = usePresentations({ user });
  return (
    <div className="panel-control">
      <ModalCreatePresentation user={user} />
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
