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
        </tr>
      </thead>
      <tbody>
        {presentations.map((item) => (
          <ItemPresentation presentation={item} />
        ))}
      </tbody>
    </Table>
  );
}
