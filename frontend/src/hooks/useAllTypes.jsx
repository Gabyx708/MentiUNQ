/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import getAllTypes from "../services/types/getAllTypes";

export default function useAllTypes() {

  const [types, setTypes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTypes()
      .then((typesResponse) => {
        setLoading(false);
        setTypes(typesResponse);
      })
      .catch((err) => {
        setLoading(false);
        setTypes(undefined);
      });
  }, []);

  return { types, loading };
}
