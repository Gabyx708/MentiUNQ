import React from "react";
import { motion } from "framer-motion";
import useComponent from "../../../hooks/useComponent";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

export default function PreviewSlide({ slide, select, index }) {

  return (
    <>
      {slide && (
        <motion.div
          custom={{ delay: (index + 1) * 0.1 }}
          layoutId={slide.id}
          className="slide-preview"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <h4
            
            style={{ margin: "0px" }}>{slide.type.name}
          </h4>
        </motion.div>
      )}
    </>
  );
}
