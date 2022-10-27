import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import Option from "../OptionsSlides/Option";
import { Button } from "react-bootstrap";

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

    const createItem = (e) =>{
     let tmp = [...options,`Item ${(options.length)+1}`]
     setOptions(tmp)
      
    }
    const remove = (index,option) =>{
      let tmp  = options.filter(item => item !== option)
      setOptions(tmp)
    }
      return (
         <div style={{ display: "flex",flexDirection:"column" ,gap: "6px", flexWrap: "wrap" }}>
           <Reorder.Group
            className="todo-list"
            axis="y"
            values={options}
            onReorder={setOptions}
          >
            {options.map((option,index) => (
              <Reorder.Item key={option} value={option} as="ol">
                <Option index={option} todo={option} remove={remove}/>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <Button variant="outline-primary" onClick={(e)=>createItem()}>Agregar item</Button>
         </div>
      );
}
