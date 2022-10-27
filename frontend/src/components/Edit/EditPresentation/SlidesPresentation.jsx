import React from "react";
import "./index.css";
import { Reorder, motion } from "framer-motion";
import PreviewSlide from "../PreviewSlide/PreviewSlide";


export default function SlidesPresentation({ slides, currentSlide,reOrderSlides,changeCurrentSlide }) {
  return (
    <>
      {currentSlide ? (
        <>
          <div className="slides-presentation">
            <Reorder.Group
              className="todo-list-slides"
              axis="y"
              values={slides}
              onReorder={(v)=>reOrderSlides(v)}
            >
              {slides ? (
                slides.map((item, indx) => (
                  <Reorder.Item
                    key={item.id}
                    value={item}
                  >
                    {item.id === currentSlide.id ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                    <PreviewSlide
                      slide={item}
                      isSelected={item.id === currentSlide.id}
                      index={indx + 1}
                      changeCurrentSlide={changeCurrentSlide}
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
