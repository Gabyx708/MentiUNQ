import React, { useState } from "react";
import useAllTypes from "../../hooks/useAllTypes";
import TypePreview from "./TypePreview";
import "./index.css";
export default function PanelOfTypes({typeSelected,setTypeSelected}) {
  const { types, loading } = useAllTypes();
  return (
    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
      <strong>Tipos de slides</strong>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {types &&
          types.map((type, indx) => (
            <TypePreview
              key={indx}
              type={type}
              active={typeSelected}
              setActive={setTypeSelected}
            />
          ))}
      </div>
    </div>
  );
}
