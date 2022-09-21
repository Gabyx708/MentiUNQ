/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import getPresentationById from "../services/presentations/getPresentations";

export default function useSinglePresentation({ id }) {
  const [presentation, setPresentation] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPresentationById({ keyword: id })
      .then((presentationResponse) => {
        setLoading(false);
        setPresentation(presentationResponse);
      })
      .catch((err) => {
        setLoading(false);
        setPresentation(undefined);
      });
  }, [id]);

  return { presentation, loading, setPresentation };
}
