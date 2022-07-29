import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicActions from "../../store/MusicSlice";

//a function to return the percent of a number relative to another number
const getPercentOf = (number1, number2) => {
  return (number1 / number2) * 100;
};

const VolumeBar = (props) => {
  const { callBack, position, maxPosition } = props;
  const isDragging = useSelector((state) => state.music.isDragging);
  const dispatch = useDispatch();
  const fillRef = useRef();
  const barRef = useRef();

  const setDragToFals = () => {
    document.removeEventListener("mouseup", setDragToFals);
    document.removeEventListener("mousemove", moveFill);
    dispatch(musicActions.setIsDragging(false));
  };

  const moveFill = (e) => {
    const barRect = barRef.current.getBoundingClientRect();

    //if fill bar has a width that is not equal to 100% and 0%, user can move it
    if (
      fillRef.current.style.height !== "0%" ||
      fillRef.current.style.height !== "100%"
    ) {
      //get the percent of users clicked or moved place relative to the bar
      let percent = 100 - getPercentOf(e.clientY - barRect.top, barRect.height);

      //prevent making the fill bar width bigger than 100% percent or less than 0
      if (percent <= 0) percent = 0;
      else if (percent >= 100) percent = 100;

      callBack(percent);

      //make the width of fill bar to the calculated width
      fillRef.current.style.height = percent + "%";
    }
  };

  return (
    <div
      className="h-full w-[5px] rounded-[10px] bg-[#687076] dark:bg-[#4b4b4b] group flex flex-col justify-end sm:hidden"
      ref={barRef}
      onClick={moveFill}
    >
      <div
        className="w-full bg-black dark:bg-white h-[50px] rounded-[10px] relative"
        style={
          isDragging
            ? { height: fillRef.current.style.height }
            : { height: getPercentOf(position, maxPosition) + "%" }
        }
        ref={fillRef}
      >
        <span
          onMouseDown={() => {
            document.addEventListener("mouseup", setDragToFals);
            document.addEventListener("mousemove", moveFill);
            dispatch(musicActions.setIsDragging(true));
          }}
          className="group-hover:opacity-100 cursor-pointer opacity-0 transition duration-300 absolute left-[calc(100%_-_7px)] w-[10px] h-[10px] rounded-full bg-black dark:bg-[#e8e8e8] top-[-3px]"
        ></span>
      </div>
    </div>
  );
};

export default VolumeBar;
