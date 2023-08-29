import { useDispatch } from "react-redux";
import musicActions from "../../../store/MusicSlice";
import PauseIcon from "../../Icons/PauseIcon";

//a component to display pause icon
const Pause = () => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => {
        dispatch(musicActions.pauseMusic());
      }}
      className="flex pause-music-button justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[#bdb3b3] dark:hover:bg-[#383838] transition duration-300 cursor-pointer"
    >
      <PauseIcon className="w-[30px] h-[30px] fill-black dark:fill-white" />
    </span>
  );
};

export default Pause;
