import React, { useState } from "react";
import { Reorder } from "framer-motion";
import Option from "../OptionsSlides/Option";
export default function Ranking() {
  const [options, setOptions] = useState([
    { id: 11, text: "prueba" },
    { id: 22,text:"prueba2"},
    { id: 33,text:"prueba3"},
  ]);
  return (
    <div>
      <Reorder.Group
        className="todo-list"
        axis="y"
        values={options}
        onReorder={setOptions}
      >
        {options.map((option, index) => (
          <Reorder.Item key={option.id} value={option}>
            <Option index={index} todo={option} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
