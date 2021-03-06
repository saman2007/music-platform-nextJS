import { useCallback } from "react";
import { throttle } from "../../helpers/helpers";
import useAxis from "../../hooks/useAxis";
import Popup from "../Popup/Popup";
import OptionsItems from "./OptionsItems/OptionsItems";

const Options = (props) => {
  const { children, close, situation, toggle } = props;

  const dotsEventHandler = useCallback(
    throttle(() => {
      //if user clicked on 3 dots, and option popup is not in the DOM, display that, else remove that
      toggle();
    }, 300),
    []
  );

  //get the offset, childRef and updated childrens of Options component
  const { childrens, childRef, offset } = useAxis(children, {
    onClick: dotsEventHandler,
  });

  return (
    <>
      <Popup
        childRef={childRef}
        exteraClass="origin-top-left duration-[300ms] rounded-[20px] w-[250px] overflow-y-auto h-[250px]"
        left={offset.x + 25}
        top={offset.y}
        situation={situation}
        time={300}
        closePopup={close}
        animations={{ opening: "scale-0", closing: "scale-0" }}
      >
        <OptionsItems />
      </Popup>

      {childrens}
    </>
  );
};

export default Options;
