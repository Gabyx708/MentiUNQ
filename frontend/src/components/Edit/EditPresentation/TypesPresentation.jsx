import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import useAllTypes from "../../../hooks/useAllTypes";
import OptionsSlides from "../OptionsSlides/OptionsSlides";

export default function TypesPresentation({ currentSlide, handleChange }) {
  const [description, setDescription] = useState();
  const [type, setType] = useState(
    currentSlide && currentSlide.type ? currentSlide.type.id : 1
  );
  const [showDescription, setShowDescription] = useState(false);

  const [question, setQuestion] = useState(
    currentSlide ? currentSlide.question : "Agregue una pregunta"
  );
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
  const handleChangeType = (item) => {
    if (item !== "default") {
      const newSlide = { ...currentSlide }; // this is a new array, which contains the same items from the state
      newSlide.type.id = parseInt(item);
      let type = types.find((t) => t.id === parseInt(item));
      newSlide.type.name = type.name;
      newSlide.type.type = type.code;
      newSlide.type.code = type.code;
      handleChange(newSlide);
    }
  };
  useEffect(() => {
    if (type !== "default" && types) {
      const newSlide = { ...currentSlide }; // this is a new array, which contains the same items from the state
      newSlide.type.id = parseInt(type);
      let typeOld = types.find((t) => t.id === parseInt(type));
      newSlide.type.name = typeOld.name;
      newSlide.type.type = typeOld.code;
      newSlide.type.code = typeOld.code;
      newSlide.question = question;
      handleChange(newSlide);
    }
  }, [description, question, type]);

  const handleChangeQuestion = (value) => {
    setQuestion(value);
  };
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
              <h5>Tipo de diapositiva</h5>
              <Form.Select
                defaultValue={
                  currentSlide.type.code === "SINTIPO"
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
                  <input
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <small>
                    Agrega un texto corto que podría ayudar a poner en contexto
                    a la pregunta
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
              <input
                onChange={(e) => {
                  handleChangeQuestion(e.target.value);
                }}
                defaultValue={question}
                type="text"
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
