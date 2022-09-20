import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import useAllTypes from "../../../hooks/useAllTypes";
import OptionsSlides from "../OptionsSlides/OptionsSlides";

export default function TypesPresentation({ currentSlide, handleChange }) {
  const [description, setDescription] = useState(currentSlide.context ? currentSlide.context : "");
  const [type, setType] = useState(currentSlide && currentSlide.type ? currentSlide.type.id : 1);
  const [showDescription, setShowDescription] = useState(false);

  const [question, setQuestion] = useState(currentSlide.question);
  const { types, loading } = useAllTypes();

  const pStyle = {
    display: showDescription ? "flex" : "none",
    textAlign: "center",
  };
  const styleGroup = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    gap: "10px",
  };
  useEffect(() => {
    if (type && type !== "default" && types) {
      let newType = types.find((t) => {
        return t.id === parseInt(type);
      });
      currentSlide.type.id = newType.id;
      currentSlide.type.name = newType.name;
      currentSlide.type.type = newType.code;
      currentSlide.type.code = newType.code;
      handleChange(currentSlide);
    }
  }, [type]);

  useEffect(() => {
    if (currentSlide) {
      currentSlide.question = question;
      handleChange(currentSlide);
    }
    }, [question]);

  return (
    <>
      {currentSlide ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="types-presentation"
        >
          {!loading && (
            <section className="container-types">
              <h6>Tipo de diapositiva</h6>
              <Form.Select
                defaultValue={
                  currentSlide || currentSlide.type.code === "SINTIPO"
                    ? "default"
                    : currentSlide.type.id
                }
                aria-label="Default select example"
                onChange={(e) => setType(e.target.value)}
              >
                {currentSlide.type.code === "SINTIPO" && (
                  <option
                    selected={!currentSlide.type.id}
                    className={!currentSlide.type.id ? "selected" : ""}
                    key="default"
                    value="default"
                  >
                    Seleccione un tipo
                  </option>
                )}
                {types.map((item) => (
                  <option
                    className={
                      currentSlide.type.id === item.id ? "selected" : ""
                    }
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </section>
          )}
          {currentSlide.type.id && (
            <section className="container-question-description">
              <div style={styleGroup}>
                <motion.div
                  style={pStyle}
                  className="container-context"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Form.Control
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}

                    // aria-describedby="passwordHelpBlock"
                  />

                  <small>
                    <Form.Text id="contextInfo" muted>
                      Agrega un texto corto que podría ayudar a poner en
                      contexto a la pregunta
                    </Form.Text>
                  </small>
                </motion.div>
                <Button
                  size="sm"
                  variant="link"
                  onClick={() => setShowDescription(!showDescription)}
                >
                  Agregar un contexto
                </Button>{" "}
              </div>
              <strong>Tu pregunta</strong>
              <Form.Control
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                defaultValue={question}
                type="text"

                // aria-describedby="passwordHelpBlock"
              />
            </section>
          )}
          {currentSlide.type.code !== "SINTIPO" && (
            <OptionsSlides currentSlide={currentSlide} />
          )}
        </motion.div>
      ) : (
        <>Agregue una slide</>
      )}
    </>
  );
}
