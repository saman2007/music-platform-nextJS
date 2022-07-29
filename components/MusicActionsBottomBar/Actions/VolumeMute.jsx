import VolumeMuteIcon from "@heroicons/react/solid/VolumeOffIcon";
import { useDispatch } from "react-redux";
import musicActions from "../../../store/MusicSlice";

const VolumeMute = () => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => {
        dispatch(musicActions.unmuteMusic());
      }}
      className="flex justify-center items-center  min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] rounded-full dark:hover:bg-[#383838] hover:bg-[#c9bdbd] transition duration-300 cursor-pointer"
    >
      <VolumeMuteIcon className=" min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] fill-black dark:fill-white" />
    </span>
  );
};

export default VolumeMute;
