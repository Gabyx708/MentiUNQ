/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import checkout from "../components/Edit/Types/collection";

export default function useComponent({currentSlide}) {
  const [Element, setElement] = useState(checkout(currentSlide.type.code));
  useEffect(()=>{
    setElement(checkout(currentSlide.type.code))
  },[currentSlide])
  return { Element, setElement };
}
