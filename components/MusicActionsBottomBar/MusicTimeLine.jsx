import { useDispatch, useSelector } from "react-redux";
import Bar from "./Bar";
import MobileBar from "./MobileBar";
import musicActions from "../../store/MusicSlice";
import { getTime } from "../../helpers/helpers";

const MusicTimeLine = () => {
  const currentTime = useSelector((state) => state.music.currentTime);
  const musicDuration = useSelector((state) => state.music.duration);
  const dispatch = useDispatch();

  return (
    <>
      <div className="hidden sm:flex items-center gap-x-[15px] w-[60%]">
        <p className="dark:text-white text-black text-[14px]">{getTime(currentTime)}</p>
        <Bar
          callBack={(percent) => {
            //calculate the new current time number of audio base on users clicked or moved percent
            const newTime = (percent / 100) * musicDuration;
            //setting the calculated time
            dispatch(musicActions.updateMusicTime(newTime));
          }}
          position={currentTime}
          maxPosition={musicDuration}
        />
        <p className="dark:text-white text-black text-[14px]">{getTime(musicDuration)}</p>
      </div>
      <MobileBar position={currentTime} maxPosition={musicDuration} />
    </>
  );
};

export default MusicTimeLine;
