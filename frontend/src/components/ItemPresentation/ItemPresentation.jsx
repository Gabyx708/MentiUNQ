import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../PanelControl/index.css";
export default function ItemPresentation({ presentation }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit/presentation/" + presentation.id);
  };
  return (
    <tr className="presentation-row" onClick={() => handleEdit()}>
      <td>{presentation.id}</td>
      <td>{presentation.title}</td>
    </tr>
  );
}