import { useSelector } from "react-redux";
import VolumeUp from "./VolumeUp";
import VolumeMute from "./VolumeMute";

const Volume = () => {
  const isMuted = useSelector((state) => state.music.isMuted);

  return <>{isMuted ? <VolumeMute /> : <VolumeUp />}</>;
};

export default Volume;
