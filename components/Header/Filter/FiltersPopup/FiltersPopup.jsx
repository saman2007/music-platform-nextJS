import Popup from "../../../Popup/Popup";
import useCssTransition from "../../../../hooks/useCssTransition";
import { useCallback } from "react";
import useAxis from "../../../../hooks/useAxis";
import { throttle } from "../../../../helpers/helpers";
import FiltersItems from "./Filters";

const FiltersPopup = ({ children }) => {
  const { situation, close, toggle } = useCssTransition(400, "close");

  const dotsEventHandler = useCallback(
    throttle(() => {
      toggle();
    }, 400),
    []
  );

  const { childrens, childRef, offset } = useAxis(children, {
    onClick: dotsEventHandler,
  });

  return (
    <>
      <Popup
        childRef={childRef}
        closePopup={close}
        exteraClass="origin-top p-[5px] duration-[400] rounded-[10px] w-[200px] overflow-y-auto min-h-fit max-h-[250px]"
        time={400}
        situation={situation}
        top={offset.y + 30}
      >
        <FiltersItems />
      </Popup>
      {childrens}
    </>
  );
};

export default FiltersPopup;
