/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import getAllTypes from "../services/types/getAllTypes";

export default function useAllTypes() {
  const typesTMP = JSON.parse(localStorage.getItem("types"));
  const [types, setTypes] = useState(typesTMP);
  const [loading, setLoading] = useState(!typesTMP?false:true);

  useEffect(() => {
    getAllTypes()
      .then((typesResponse) => {
        setLoading(false);
        setTypes(typesResponse);
        localStorage.setItem("types", JSON.stringify(typesResponse))
      })
      .catch((err) => {
        setLoading(false);
        setTypes(undefined);
      });
  }, []);

  return { types, loading };
}
