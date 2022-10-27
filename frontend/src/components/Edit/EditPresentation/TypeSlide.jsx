import React from 'react'

import CanvasJSReact from "../../../canvasjs/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function TypeSlide({currentSlide}) {
    const dataItems =[]
    if(currentSlide.options){
      currentSlide.options.forEach(option=>{
        dataItems.push({label:option,y:0})
      })
    }
    const options = {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      axisY: {
        gridThickness: 0,
        lineThickness: 0,
      },
      data: [{
        type: "column",
        dataPoints: dataItems
      }]
    }
  return (
    <CanvasJSChart options={options} containerProps={{ width: '100%', height: '300px' }} />
  )
}
