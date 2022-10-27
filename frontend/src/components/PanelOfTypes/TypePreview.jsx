import React from "react";

export default function TypePreview({ type,active,setActive }) {
  console.log("🚀 ~ file: TypePreview.jsx ~ line 4 ~ TypePreview ~ type", type)

  const classNameType = active && type.code===active.code?"slide-preview type-selection type-active ":"slide-preview type-selection"
  return (
    <div class={classNameType} onClick={(e)=>setActive(type)}>
      <h6>{type.name}</h6>
    </div>
  );
}
