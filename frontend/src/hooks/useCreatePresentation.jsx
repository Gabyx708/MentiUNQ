import { useEffect, useState } from "react";
import createPresentation from "../services/presentations/createPresentation";

export default function useCreatePresentation({ name }) {
  const [title, setTitle] = useState(name);
  const [presentation, setPresentation] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (title) {
      setLoading(true);
      createPresentation({ titlePresentation: title })
        .then((newpresentation) => {
          console.log(
            "🚀 ~ file: useCreatePresentation.jsx ~ line 8 ~ useCreatePresentation ~ title",
            title
          );
          setPresentation(newpresentation);
          setLoading(false);
        })
        .catch((err) => {
            console.log("🚀 ~ file: useCreatePresentation.jsx ~ line 24 ~ useEffect ~ err", err)
            return {}
        })
    }
  }, [title]);

  return { presentation, loading, setTitle };
}
