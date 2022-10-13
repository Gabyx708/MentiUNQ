import { useEffect, useState } from "react";
import createPresentation from "../services/presentations/createPresentation";

export default function useCreatePresentation({ name,user }) {
  console.log("🚀 ~ file: useCreatePresentation.jsx ~ line 5 ~ useCreatePresentation ~ user", user)
  const [title, setTitle] = useState(name);
  const [presentation, setPresentation] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (title) {
      setLoading(true);
      createPresentation({ titlePresentation: title,user:{name:user.name,email: user.email} })
        .then((newpresentation) => {
          setPresentation(newpresentation);
          setLoading(false);
        })
        .catch((err) => {
            return {}
        })
    }
  }, [title]);

  return { presentation, loading, setTitle };
}
