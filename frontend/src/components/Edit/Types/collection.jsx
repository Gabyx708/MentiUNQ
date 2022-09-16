import MultipleChoice from "./MultipleChoice";
import OpenEnded from "./OpenEnded";
import Ranking from "./Ranking";
import WordCloud from "./WordCloud";

const collectionTypes = [  {
    // default export
    code: "SINTIPO",
    component: "SinTipo",
  },
  {
    // default export
    code: "MULCHO",
    component: <MultipleChoice />,
  },
  {
    // default export
    code: "WORCLO",
    component: <WordCloud />,
  },
  {
    // default export
    code: "OPENEND",
    component: <OpenEnded />,
  },
  {
    // default export
    code: "RANKING",
    component: <Ranking />,
  },];

 export default function checkout (step ) {
  const ToRender = collectionTypes.find(t=>t.code===step);
  return ToRender;
};

