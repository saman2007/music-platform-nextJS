import { useEffect } from "react";

//a custom hook to detect that user clicked
const useOutSideClick = (ref, outSideClickHandler, condition = true) => {
  useEffect(() => {
    if (condition) {
      const handleClickOutside = (event) => {
        //if ref.current doesnt contain event.target it means that user clicked outside
        if (ref.current && !ref.current.contains(event.target)) {
          outSideClickHandler(event.target);
        }
      };

      document.addEventListener("click", handleClickOutside, { capture: true });
      return () => {
        document.removeEventListener("click", handleClickOutside, {
          capture: true,
        });
      };
    }
  }, [ref, condition]);
};

export default useOutSideClick;
