import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import Option from "../OptionsSlides/Option";

const initOptions = [
     "Item 1" ,"Item 2","Item 3"
  ];
export default function Options({currentSlide,handleChange}) {
    const [options, setOptions] = useState(currentSlide && currentSlide.options?currentSlide.options:initOptions);

    useEffect(()=>{
        if(!currentSlide.options){
            currentSlide.options = initOptions;
            handleChange(currentSlide)
        }
    },[])
    
    useEffect(()=>{
            currentSlide.options = options;
            handleChange(currentSlide)
    },[options])
      return (
          <Reorder.Group
            className="todo-list"
            axis="y"
            values={options}
            onReorder={setOptions}
          >
            {options.map((option,index) => (
              <Reorder.Item key={option} value={option} as="ol">
                <Option index={option} todo={option} />
              </Reorder.Item>
            ))}
          </Reorder.Group>
      );
}
