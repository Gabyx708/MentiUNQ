import React, { useEffect, useState } from "react";
import getPresentationById from "../../services/presentations/getPresentations";
import { useParams,Link } from "react-router-dom";


export default function PresentationView() {
  const [presentation, setPresentation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const { code } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setPresentation(null);
    setNotFound(false);
    // llamar al servicio si no tenemos gif
    getPresentationById({ keyword: code })
      .then((presentationResponse) => {
        setIsLoading(false);
        if (presentationResponse) {
          setPresentation(presentationResponse);
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setPresentation(null);
        setError(true);
      });
  }, [code]);

  return (
    <>
      {isLoading ? (
        <h1>
          <strong>Cargando...</strong>
        </h1>
      ) : (
        <></>
      )}
      {presentation ? (
        <h1>
          <strong>Titulo de la presentación:</strong> {presentation.title}
        </h1>
      ) : (
        <></>
      )}
      {notFound ? (
        <>
          <h1>
            <strong>No encontramos la presentación :(</strong>
          </h1>{" "}
          <Link to="/">
          <button className="btn-custom">Volver al inicio</button>
        </Link>
        </>
      ) : (
        <></>
      )}
      {error ? (
        <h1>
          <strong>Error al buscar la presentación</strong>
        </h1>
      ) : (
        <></>
      )}
    </>
  );
}
