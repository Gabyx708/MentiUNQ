import React, { useEffect } from "react";
import "./index.css"

export default function HeadPresentation({ presentation }) {

  useEffect(()=>{
    console.log("🚀 ~ file: HeadPresentation.jsx ~ line 7 ~ useEffect ~ presentation", presentation)
  },[presentation])
  return (
    <div className="header-presentation">
      <header>
        <button>VOLVER</button>
        <input onChange={()=>alert("test")} value={presentation.title} />
        <button>Compartir</button>
      </header>
      <div>
        <button>Nueva slide</button>
      </div>
    </div>
  );
}
