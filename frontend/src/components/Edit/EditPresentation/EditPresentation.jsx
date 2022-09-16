import React from "react";
import { motion } from "framer-motion";

export default function EditPresentation({ currentSlide }) {
  return (
    <>
      {currentSlide ? (
        <div className="edit-presentation">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="editor-presentation"
          >
            <h4>{currentSlide.description}</h4>

            <h3>{currentSlide.question}</h3>
            <h4>{currentSlide.type.name}</h4>
          </motion.div>
        </div>
      ) : (
        <>Seleccione una slide</>
      )}
    </>
  );
}
