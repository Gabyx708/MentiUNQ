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
            <div>
            <small>
              <Form.Text id="contextSlide" muted>
                {currentSlide.context}
              </Form.Text>
            </small>
            <h4>{currentSlide.question}</h4>
            <strong>
              <small>
                <Form.Text id="descriptionSlide" muted>
                  {currentSlide.description}
                </Form.Text>
              </small>{" "}
            </strong>{" "}
            </div>
            <div className="container-options-slide">
              Aqui opciones
            </div>
          </motion.div>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Puede ingresar alguna nota a ésta slide si desea"
          ></Form.Control>
        </div>
      ) : (
        <>Seleccione una slide</>
      )}
    </>
  );
}
