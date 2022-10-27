import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSinglePresentation from "../../hooks/useSinglePresentation";
import "./index.css";
import "../../components/Edit/EditPresentation/index.css";
import HeadPresentation from "../../components/Edit/EditPresentation/HeadPresentation";
import SlidesPresentation from "../../components/Edit/EditPresentation/SlidesPresentation";
import EditPresentation from "../../components/Edit/EditPresentation/EditPresentation";
import TypesPresentation from "../../components/Edit/EditPresentation/TypesPresentation";
import Loading from "../../components/Loading/Loading";

export default function CreatePresentation() {
 
  const { id } = useParams();
  const { presentation, loading, setPresentation } = useSinglePresentation({
    id,
  });
  const [currentSlide, setCurrentSlide] = useState(
    null
  );
  const [slides, setSlides] = useState(loading ? [] : presentation.slides);

  useEffect(() => {
    if (presentation) {
      setCurrentSlide(getCurrentSlide(presentation));
      setSlides(presentation.slides);
    }
  }, [presentation]);

  const getCurrentSlide = (presentation) => {
    if (presentation) {
      let currentTMP = presentation.slides.filter(
        (slide) => slide.currentSlide
      );
      return currentTMP[0];
    }
  };
  const reOrderSlides = (newSlides) => {
    presentation.slides = newSlides;
    handlePresentationChange(presentation);
  };

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
  
  const handleCreateSlide = (newSlide) => {
    let newSlides = [...presentation.slides, newSlide];
    presentation.slides = newSlides;
    handlePresentationChange(presentation);
  };

  const changeCurrentSlide = (slide) => {
    currentSlide.currentSlide = false;
    slide.currentSlide = true;
    setCurrentSlide(slide)
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(presentation),
    };
    fetch(`http://localhost:8080/presentations/update`, requestOptions)
      .then((res) => res.json())
      .then((response) => response)
      .then((presentationResponse) => {
        setPresentation(presentationResponse);
      });
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container-presentation">
          <HeadPresentation
            currentPresentation={presentation}
            handlePresentationChange={handlePresentationChange}
            handleCreateSlide={handleCreateSlide}
          />
          {currentSlide && (
            <>
              <SlidesPresentation
                slides={slides}
                currentSlide={currentSlide}
                reOrderSlides={reOrderSlides}
                handlePresentationChange={handlePresentationChange}
                changeCurrentSlide={changeCurrentSlide}
              />
              <EditPresentation
                currentSlide={currentSlide}
                handleChange={handleChange}
              />
              <TypesPresentation
                currentSlide={currentSlide}
                handleChange={handleChange}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
