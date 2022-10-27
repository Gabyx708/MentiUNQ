import React from "react";
import useComponent from "../../../hooks/useComponent";

export default function ListOptions({ currentSlide,handleChange }) {
  const { Element } = useComponent({ currentSlide });

  return <>{Element && <Element.component currentSlide={currentSlide} handleChange={handleChange}/> }</>;
}
