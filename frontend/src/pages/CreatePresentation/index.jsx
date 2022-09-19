import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSinglePresentation from "../../hooks/useSinglePresentation";
import "./index.css";
import "../../components/Edit/EditPresentation/index.css";
import HeadPresentation from "../../components/Edit/EditPresentation/HeadPresentation";
import SlidesPresentation from "../../components/Edit/EditPresentation/SlidesPresentation";
import EditPresentation from "../../components/Edit/EditPresentation/EditPresentation";
import TypesPresentation from "../../components/Edit/EditPresentation/TypesPresentation";

export default function CreatePresentation() {
  const { id } = useParams();
  const { presentation, loading, setPresentation } = useSinglePresentation({
    id,
  });
  const [currentSlide, setCurrentSlide] = useState(
    presentation ? presentation.slides[0] : null
  );

  useEffect(() => {
    if (presentation) {
      setCurrentSlide(presentation.slides[0]);
    }
  }, [presentation]);

  const handlePresentationChange = (newPresentation) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPresentation),
    };
    fetch(`http://localhost:8080/presentations/update`, requestOptions)
      .then((res) => res.json())
      .then((response) => response)
      .then((presentationResponse) => {
        setPresentation(presentationResponse);
      });
  };

  const handleChange = (newSlide) => {
    let indexOfObject = presentation.slides.indexOf(currentSlide);
    presentation.slides.splice(indexOfObject, 1);
    let newSlides = [...presentation.slides];
    newSlides.splice(indexOfObject, 0, newSlide);
    presentation.slides = newSlides;
    setCurrentSlide(newSlide);
    handlePresentationChange(presentation);
  };
  return (
    <div className="container-presentation">
      {loading ? (
        <h1>Cargando presentación</h1>
      ) : (
        <>
          <HeadPresentation
            currentPresentation={presentation}
            handlePresentationChange={handlePresentationChange}
          />
          {currentSlide && (
            <>
              <SlidesPresentation
                slides={presentation.slides}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                handlePresentationChange={handlePresentationChange}
              />
              <EditPresentation currentSlide={currentSlide} />
              <TypesPresentation
                currentSlide={currentSlide}
                handleChange={handleChange}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
