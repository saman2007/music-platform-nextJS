import { useDispatch, useSelector } from "react-redux";
import Bar from "./Bar";
import musicActions from "../../store/MusicSlice";
import Volume from "./Actions/Volume";

const VolumeBar = () => {
  const currentVolume = useSelector((state) => state.music.currentVolume);
  const dispatch = useDispatch();

  return (
    <div className="hidden sm:flex justify-center items-center w-[20%] gap-x-[5px]">
      <Volume />
      <Bar
        callBack={(percent) => {
          dispatch(musicActions.setVolume(percent / 100));
        }}
        position={currentVolume}
        maxPosition={1}
      />
    </div>
  );
};

export default VolumeBar;
