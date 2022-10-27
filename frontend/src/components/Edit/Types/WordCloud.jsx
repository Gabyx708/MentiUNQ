import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function WordCloud({currentSlide,handleChange}) {
  const [maxInput, setMaxInput] = useState(currentSlide.max_input?currentSlide.max_input:1);

  const changeQuantity = (newValue) =>{
    setMaxInput(newValue)
  }
  useEffect(()=>{
    currentSlide.max_input=maxInput;
    handleChange(currentSlide)
  },[maxInput])
  return (
    <section className="container-question-description">
      <strong>Cantidad de palabras por participante</strong>
      <Form.Control
        size="sm"
        min="1"
        style={{ width: "100px" }}
        onChange={(e)=>changeQuantity(e.target.value)}
        type="number"
        value={maxInput}
        
      />
    </section>
  );
}
