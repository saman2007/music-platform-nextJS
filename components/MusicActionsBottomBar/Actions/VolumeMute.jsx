import VolumeMuteIcon from "@heroicons/react/solid/VolumeOffIcon";
import { useDispatch } from "react-redux";
import musicActions from "../../../store/MusicSlice";

const VolumeMute = (props) => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => {
        props.unmute();
        dispatch(musicActions.setIsMuted(false));
      }}
      className="flex justify-center items-center  min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] rounded-full hover:bg-[#383838] transition duration-300 cursor-pointer"
    >
      <VolumeMuteIcon className=" min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] fill-white" />
    </span>
  );
};

export default VolumeMute;
