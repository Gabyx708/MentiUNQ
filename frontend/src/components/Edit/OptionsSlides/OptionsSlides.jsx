import React from "react";
import useComponent from "../../../hooks/useComponent";

export default function OptionsSlides({ currentSlide }) {
  const { Element } = useComponent({ currentSlide });

  return <>{Element && <Element.component/> }</>;
}
