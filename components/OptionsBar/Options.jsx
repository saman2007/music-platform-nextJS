import { useRef } from "react";
import useAxis from "../../hooks/useAxis";
import useCssTransition from "../../hooks/useCssTransition";
import useOutSideClick from "../../hooks/useOutSideClick";
import OptionsItems from "./OptionsItems/OptionsItems";

const Options = (props) => {
  const { children, setShowOptions, showOptions } = props;
  const { situation, close, open } = useCssTransition(400, "close");
  const boxRef = useRef();

  //get the offset, childRed and updated childrens of Options component
  const { childrens, childRef, offset } = useAxis(children, {
    onClick: () => {
      //if user clicked on 3 dots, and option popup is not in the DOM, display that, else remove that
      if (!showOptions) {
        open();
      } else close();

      setShowOptions(!showOptions);
    },
  });

  //if options popup is in the DOM, and user clicked outside the popup, close the popup
  useOutSideClick(
    boxRef,
    (clickedEl) => {
      //if user didnt click on three dots, continue
      if (childRef.current && !childRef.current.contains(clickedEl)) {
        setShowOptions(false);
        close();
      }
    },
    showOptions
  );

  return (
    <>
      {situation !== "close" && (
        <div
          ref={boxRef}
          className={`${
            situation === "opening" || situation === "closing"
              ? "scale-0"
              : situation === "open"
              ? "open"
              : ""
          } transition-all z-10 origin-top-left duration-[400] absolute rounded-[20px] bg-[#0d0d0d] border border-[#1e1e1e] border-solid w-[250px] overflow-y-auto h-[250px]`}
          style={{ left: offset.x + 25 + "px", top: offset.y + "px" }}
        >
          <OptionsItems />
        </div>
      )}
      {childrens}
    </>
  );
};

export default Options;
