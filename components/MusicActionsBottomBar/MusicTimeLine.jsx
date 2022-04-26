import { useEffect, useRef, useState } from "react";

//a function to return a time that converted from seconds to minutes
const getTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return `${minutes}:${seconds}`;
};

//a function to return the percent of a number relative to another number
const getPercentOf = (number1, number2) => {
  return (number1 / number2) * 100;
};

const MusicTimeLine = (props) => {
  const { currentTime, musicTime } = props;
  const [isDraging, setIsDraging] = useState(false);
  const fillRef = useRef();
  const barRef = useRef();

  //a function to set the drag state to false
  const setDragToFals = () => {
    setIsDraging(false);
  };

  //a function to move the fill bar of time line
  const moveFill = (e) => {
    const barRect = barRef.current.getBoundingClientRect();

    //if fill bar has a width that is not equal to 100% and 0%, user can move it
    if (
      fillRef.current.style.width !== "0%" ||
      fillRef.current.style.width !== "100%"
    ) {
      //get the percent of users clicked place relative to the bar
      let percent = getPercentOf(
        e.clientX - barRef.current.getBoundingClientRect().left,
        barRect.width
      );

      //prevent making the fill bar width bigger than 100% percent or less than 0
      if (percent <= 0) percent = 0;
      else if (percent >= 100) percent = 100;

      //make the width of fill bar to the calculated width
      fillRef.current.style.width = percent + "%";
    }
  };

  useEffect(() => {
    //if draging is true, it means user wants to change the width of fill bar wdith draging
    if (isDraging) {
      document.addEventListener("mouseup", setDragToFals);
      document.addEventListener("mousemove", moveFill);
    }

    /* we should remove all the event listeners related to draging the fill
    bar from document after manipulating the state */
    return () => {
      document.removeEventListener("mouseup", setDragToFals);
      document.removeEventListener("mousemove", moveFill);
    };
  }, [isDraging]);

  return (
    <div className="flex flex-grow items-center gap-x-[15px]">
      <p className="text-white text-[14px]">{getTime(currentTime)}</p>
      <div
        className="h-[5px] w-[550px] rounded-[10px] bg-[#4b4b4b] group"
        ref={barRef}
        onClick={moveFill}
      >
        <div
          className="relative bg-[#e8e8e8] h-full rounded-[10px]"
          style={{ width: getPercentOf(currentTime, musicTime) + "%" }}
          ref={fillRef}
        >
          <span
            onMouseDown={setIsDraging.bind(true)}
            className="group-hover:opacity-100 cursor-pointer opacity-0 transition duration-300 absolute left-[calc(100%_-_2px)] w-[10px] h-[10px] rounded-full bg-[#e8e8e8] top-[-3px]"
          ></span>
        </div>
      </div>
      <p className="text-white text-[14px]">{getTime(musicTime)}</p>
    </div>
  );
};

export default MusicTimeLine;
