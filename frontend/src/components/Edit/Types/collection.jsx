import MultipleChoice from "./MultipleChoice";
import OpenEnded from "./OpenEnded";
import Ranking from "./Ranking";
import WordCloud from "./WordCloud";

const collectionTypes = [  {
    // default export
    code: "sintipo",
    component: "SinTipo",
  },
  {
    // default export
    code: "multiplechoice",
    component: MultipleChoice,
  },
  {
    // default export
    code: "wordcloud",
    component: WordCloud,
  },
  {
    // default export
    code: "openended",
    component: OpenEnded,
  },
  {
    // default export
    code: "ranking",
    component: Ranking,
    fields:[1,2,3]
  },];

 export default function checkout (step ) {
  const ToRender = collectionTypes.find(t=>t.code===step);
  return ToRender;
};

