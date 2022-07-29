import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicActions from "../../store/MusicSlice";

//a function to return the percent of a number relative to another number
const getPercentOf = (number1, number2) => {
  return (number1 / number2) * 100;
};

const Bar = (props) => {
  const { callBack, position, maxPosition } = props;
  const isDragging = useSelector((state) => state.music.isDragging);
  const dispatch = useDispatch();
  const fillRef = useRef();
  const barRef = useRef();

  //a function to set the drag state to false and remove all the event listeners
  const setDragToFals = () => {
    document.removeEventListener("mouseup", setDragToFals);
    document.removeEventListener("mousemove", moveFill);
    dispatch(musicActions.setIsDragging(false));
  };

  //a function to move the fill bar of time line
  const moveFill = (e) => {
    const barRect = barRef.current.getBoundingClientRect();

    //if fill bar has a width that is not equal to 100% and 0%, user can move it
    if (
      fillRef.current.style.width !== "0%" ||
      fillRef.current.style.width !== "100%"
    ) {
      //get the percent of users clicked or moved place relative to the bar
      let percent = getPercentOf(
        e.clientX - barRef.current.getBoundingClientRect().left,
        barRect.width
      );

      //prevent making the fill bar width bigger than 100% percent or less than 0
      if (percent <= 0) percent = 0;
      else if (percent >= 100) percent = 100;

      callBack(percent);

      //make the width of fill bar to the calculated width
      fillRef.current.style.width = percent + "%";
    }
  };

  return (
    <div
      className="h-[5px] w-full rounded-[10px] bg-[#687076] dark:bg-[#4b4b4b] group"
      ref={barRef}
      onClick={moveFill}
    >
      <div
        className="relative bg-black dark:bg-white h-full rounded-[10px]"
        style={
          isDragging
            ? { width: fillRef.current.style.width }
            : { width: getPercentOf(position, maxPosition) + "%" }
        }
        ref={fillRef}
      >
        <span
          onMouseDown={() => {
            document.addEventListener("mouseup", setDragToFals);
            document.addEventListener("mousemove", moveFill);
            dispatch(musicActions.setIsDragging(true));
          }}
          className="group-hover:opacity-100 cursor-pointer opacity-0 transition duration-300 absolute left-[calc(100%_-_2px)] w-[10px] h-[10px] rounded-full bg-black dark:bg-[#e8e8e8] top-[-3px]"
        ></span>
      </div>
    </div>
  );
};

export default Bar;
