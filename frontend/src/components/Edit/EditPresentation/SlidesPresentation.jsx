import React from "react";
import "./index.css";
import { Reorder, motion } from "framer-motion";
import PreviewSlide from "../PreviewSlide/PreviewSlide";


export default function SlidesPresentation({ slides, currentSlide,setCurrentSlide }) {
 
  const changeSlide = (item) => {
    console.log("🚀 ~ file: SlidesPresentation.jsx ~ line 25 ~ changeSlide ~ item", item)
  };
  return (
    <>
      {currentSlide ? (
        <>
          <div className="slides-presentation">
            <Reorder.Group
              className="todo-list"
              axis="y"
              values={slides}
            >
              {slides ? (
                slides.map((item, indx) => (
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
