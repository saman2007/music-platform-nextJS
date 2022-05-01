import { useSelector } from "react-redux";
import VolumeMute from "./Actions/VolumeMute";
import VolumeUp from "./Actions/VolumeUp";
import Bar from "./Bar";

const VolumeBar = (props) => {
  const isMuted = useSelector((state) => state.music.isMuted);
  const currentVolume = useSelector((state) => state.music.currentVolume);

  return (
    <div className="hidden sm:flex justify-center items-center w-[20%] gap-x-[5px]">
      {isMuted ? (
        <VolumeMute unmute={props.unmute} />
      ) : (
        <VolumeUp mute={props.mute} />
      )}
      <Bar
        callBack={(percent) => {
          props.setVolume(percent / 100);
        }}
        position={currentVolume}
        maxPosition={1}
      />
    </div>
  );
};

export default VolumeBar;
