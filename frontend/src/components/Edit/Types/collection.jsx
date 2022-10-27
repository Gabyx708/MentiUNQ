import OpenEnded from "./OpenEnded";
import Options from "./Options";
import WordCloud from "./WordCloud";

const collectionTypes = [  {
    // default export
    code: "sintipo",
    component: "SinTipo",
  },
  {
    // default export
    code: "multiplechoice",
    component: Options,
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
    component: Options
  },];

 export default function checkout (step ) {
  const ToRender = collectionTypes.find(t=>t.code===step);
  return ToRender;
};

