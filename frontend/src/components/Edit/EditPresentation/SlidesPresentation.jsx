import React, { useEffect, useState } from "react";
import "./index.css";
import { Reorder, motion } from "framer-motion";
import EditPresentation from "./EditPresentation";
import TypesPresentation from "./TypesPresentation";
import PreviewSlide from "../PreviewSlide/PreviewSlide";


export default function SlidesPresentation({ presentation, handlePresentationChange }) {
  const [currentSlide, setCurrentSlide] = useState(
    presentation.slides ? presentation.slides[0] : null
  );

  const handleChange = (newSlide) => {
    let indexOfObject = presentation.slides.indexOf(currentSlide);
    presentation.slides.splice(indexOfObject, 1);
    let newSlides = [...presentation.slides];
    newSlides.splice(indexOfObject, 0, newSlide);
    presentation.slides = newSlides;
    setCurrentSlide(newSlide);
    handlePresentationChange(presentation);
  };
  const changeSlide = (item) => {

    console.log("🚀 ~ file: SlidesPresentation.jsx ~ line 25 ~ changeSlide ~ item", item)
  };
  useEffect(()=>{
      setCurrentSlide(presentation.slides ? presentation.slides[0] : null)
  },[presentation])
  return (
    <>
      {presentation ? (
        <>
          <EditPresentation currentSlide={currentSlide} />
          <TypesPresentation
            currentSlide={currentSlide}
            handleChange={handleChange}
          />
          <div className="slides-presentation">
            <Reorder.Group
              className="todo-list"
              axis="y"
              values={presentation.slides}
            >
              {presentation.slides ? (
                presentation.slides.map((item, indx) => (
                  <Reorder.Item
                    key={item.id}
                    value={item}
                    onClick={() => changeSlide(item)}
                    style={{backgroundColor:(item===currentSlide?"#d1e2ff":"transparent"),borderRadius:"0px"}}
                  >
                    {item.id === currentSlide ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                    <PreviewSlide
                      slide={item}
                      select={item.id === currentSlide.type.id}
                      index={indx + 1}
                    ></PreviewSlide>
                  </Reorder.Item>
                ))
              ) : (
                <>Agregue slides</>
              )}
            </Reorder.Group>
          </div>
        </>
      ) : (
        <>Agregue slides</>
      )}
    </>
  );
}
