import { useEffect, useState } from "react";

//a custom hook to use css transition easier, base on the situation
const useCssTransition = (transitionTime, defaultSituation = "opening") => {
  const [situation, setSituation] = useState(defaultSituation);

  useEffect(() => {
    if (situation === "opening") setSituation("open");
  }, [situation === "opening"]);

  const close = () => {
    setSituation("closing");
    setTimeout(() => {
      setSituation("close");
    }, transitionTime);
  };

  const open = () => {
    setSituation("opening");
  };

  const toggle = () => {
    setSituation((prevState) => {
      if (prevState === "close") return "opening";
      else if (prevState === "open") {
        setTimeout(() => {
          setSituation("close");
        }, transitionTime);
        return "closing";
      }
    });
  };

  return { situation, close, open, toggle };
};

export default useCssTransition;
