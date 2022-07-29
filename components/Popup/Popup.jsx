import { useRef } from "react";
import { throttle } from "../../helpers/helpers";
import useOutSideClick from "../../hooks/useOutSideClick";

const Popup = ({
  exteraClass,
  time,
  children,
  left,
  top,
  childRef,
  situation,
  closePopup,
  animations,
}) => {
  const boxRef = useRef();

  useOutSideClick(
    boxRef,
    throttle(
      (clickedEl) => {
        //if user didnt click on chiledRef component, continue
        if (childRef.current && !childRef.current.contains(clickedEl)) {
          closePopup();
        }
      },
      time,
      time
    )
  );

  const styles = {};
  if (left) styles.left = left + "px";
  if (top) styles.top = top + "px";

  return (
    <>
      {situation !== "close" && (
        <div
          ref={boxRef}
          className={`${animations[situation]} ${exteraClass} transition-all gap-x z-10 absolute bg-[#0d0d0d] border border-[#1e1e1e] border-solid`}
          style={styles}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Popup;
