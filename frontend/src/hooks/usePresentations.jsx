/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import getAllPresentationsByUser from "../services/presentations/getAllPresentationsByUser";


export default function usePresentations({ user }) {
    const [presentations, setPresentations] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getAllPresentationsByUser({ userID: user.email })
        .then((presentationResponse) => {
          setLoading(false);
          setPresentations(presentationResponse);
        })
        .catch((err) => {
          setLoading(false);
          setPresentations(undefined);
        });
    }, [user]);
  
    return { presentations, loading };
  }
  