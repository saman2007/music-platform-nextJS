import NextTrackIcon from "../../Icons/NextTrackIcon";
import { useDispatch } from "react-redux";
import musicActions from "../../../store/MusicSlice";

//a compoent to display next track and previous track conditionally
const NextPrevious = (props) => {
  const { kind } = props;
  const dispatch = useDispatch();

  if (kind === "next")
    return (
      <span
        onClick={() => {
          //if user clicks on this icon, play next music
          dispatch(musicActions.playNextMusic());
        }}
        className="flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[#bdb3b3] dark:hover:bg-[#383838] transition duration-300 cursor-pointer"
      >
        <NextTrackIcon className="w-[30px] h-[30px] fill-black dark:fill-white " />
      </span>
    );
  else if (kind === "previous")
    return (
      <span
        onClick={() => {
          //if user clicks on this icon, play previous music
          dispatch(musicActions.playPreviousMusic());
        }}
        className="flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[#bdb3b3] dark:hover:bg-[#383838] transition duration-300 cursor-pointer"
      >
        <NextTrackIcon className="w-[30px] h-[30px] fill-black dark:fill-white rotate-180" />
      </span>
    );
};

export default NextPrevious;
