import { useDispatch } from "react-redux";
import musicActions from "../../../store/MusicSlice"
import PlayIconOutline from "../../Icons/PlayIconOutline";

const Play = (props) => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => {
        dispatch(musicActions.playMusic());
      }}
      className="flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[#383838] transition duration-300 cursor-pointer"
    >
      <PlayIconOutline className="w-[30px] h-[30px] fill-white" />
    </span>
  );
};

export default Play;
