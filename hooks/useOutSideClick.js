import { useEffect } from "react";

//a custom hook to detect that user clicked
const useOutSideClick = (ref, outSideClickHandler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      //if ref.current doesnt contain event.target it means that user clicked outside
      if (ref.current && !ref.current.contains(event.target)) {
        outSideClickHandler();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
};

export default useOutSideClick;
