import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSinglePresentation from "../../hooks/useSinglePresentation";
import "./index.css"
import "../../components/Edit/EditPresentation/index.css"
import HeadPresentation from "../../components/Edit/EditPresentation/HeadPresentation"
import SlidesPresentation from "../../components/Edit/EditPresentation/SlidesPresentation"

export default function CreatePresentation() {
  const { id } = useParams();
  const { presentation, loading,setPresentation} = useSinglePresentation({id});
  

  useEffect(()=>{
  
  },[presentation])

  const handlePresentationChange= (newPresentation) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPresentation)
  };
  fetch(`http://localhost:8080/presentations/update`, requestOptions).then(res=>res.json())
  .then(response=> response).then(presentationResponse=>{
    setPresentation(presentationResponse);
  });
  }
  return (
    <div className="container-presentation">
      {loading ? (
        <h1>Cargando presentación</h1>
      ) : (
        <>
        <HeadPresentation currentPresentation={presentation} handlePresentationChange={handlePresentationChange}/>
        <SlidesPresentation presentation={presentation} handlePresentationChange={handlePresentationChange}/>
        </>
      )}
    </div>
  );
}
