import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import useAllTypes from "../../../hooks/useAllTypes";
import OptionsSlides from "../OptionsSlides/OptionsSlides";


const styleGroup = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  gap: "10px",
};
export default function TypesPresentation({ currentSlide, handleChange }) {
  const [context, setContext] = useState(
    currentSlide.context ? currentSlide.context : ""
  );
  const [description, setDescription] = useState(
    currentSlide.description ? currentSlide.description : ""
  );
  const [type, setType] = useState(
    currentSlide && currentSlide.type ? currentSlide.type.id : 1
  );
  const [showContext, setShowContext] = useState(context!=="");
  const [showDescription, setShowDescription] = useState(description!=="");
  const [question, setQuestion] = useState(currentSlide.question);
  const { types, loading } = useAllTypes();

  const pStyle = {
    display: showContext ? "flex" : "none",
    textAlign: "center",
  };
  const pStyleDescription = {
    display: showDescription ? "flex" : "none",
    textAlign: "center",
  };

  useEffect(() => {
    if (type && type !== "default" && types && type!==currentSlide.type.id) {
      let newType = types.find((t) => {
        return t.id === parseInt(type);
      });
      currentSlide.type.id = newType.id;
      currentSlide.type.name = newType.name;
      currentSlide.type.type = newType.code;
      currentSlide.type.code = newType.code;
      handleChange(currentSlide);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    if (currentSlide && currentSlide.question!==question) {
      currentSlide.question = question;
      handleChange(currentSlide);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  useEffect(() => {
    if (currentSlide && currentSlide.context!==context) {
      currentSlide.context = context;
      handleChange(currentSlide);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);
  useEffect(() => {
    if (currentSlide && currentSlide.description!==description) {
      currentSlide.description = description;
      handleChange(currentSlide);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);
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
                defaultValue={type}
                onChange={(e) => setType(e.target.value)}
              >
                {currentSlide.type.code === "SINTIPO" && (
                  <option
                    key="default"
                    value={1}
                  >
                    Seleccione un tipo
                  </option>
                )}
                {types.map((item) => (
                  <option
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
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
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
                  onClick={() => setShowContext(!showContext)}
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
              />

              <div style={styleGroup}>
                <motion.div
                  style={pStyleDescription}
                  className="container-context"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                  Agregar una descripcion
                </Button>{" "}
              </div>
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
