import VolumeUpIcon from "@heroicons/react/solid/VolumeUpIcon";
import { useDispatch } from "react-redux";
import musicActions from "../../../store/MusicSlice";

const VolumeUp = () => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => {
        dispatch(musicActions.muteMusic());
      }}
      className="flex justify-center items-center min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] rounded-full hover:bg-[#383838] transition duration-300 cursor-pointer"
    >
      <VolumeUpIcon className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] fill-white" />
    </span>
  );
};

export default VolumeUp;
