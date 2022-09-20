import React from "react";
import { motion } from "framer-motion";
import { Form } from "react-bootstrap";

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
          <Form.Control as="textarea" rows={2} placeholder="Puede ingresar alguna nota a ésta slide si desea"></Form.Control>
        </div>
      ) : (
        <>Seleccione una slide</>
      )}
    </>
  );
}
