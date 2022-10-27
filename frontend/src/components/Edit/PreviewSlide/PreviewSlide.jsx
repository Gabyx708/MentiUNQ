import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
     duration: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0,
    },
  }),
};

export default function PreviewSlide({ slide, isSelected, index ,changeCurrentSlide}) {
  const classNameSlide = isSelected? "slide-preview slide-preview-active":"slide-preview"
  return (
    <>
      {slide && (
        <div
          
          className={classNameSlide}
       
          onClick={()=>changeCurrentSlide(slide)}
        >
          <h6 style={{ margin: "0px" }}>{slide.name}</h6>
        </div>
      )}
    </>
  );
}
