import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemPresentation from "../ItemPresentation/ItemPresentation";

export default function TablePresentations({ presentations }) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th> Nombre </th>
          <th> Acciones </th>
        </tr>
      </thead>
      <tbody>
        {presentations.map((item) => (
          <ItemPresentation key={item} presentation={item} />
        ))}
      </tbody>
    </Table>
  );
}
