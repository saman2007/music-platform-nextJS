import { useDispatch, useSelector } from "react-redux";
import Bar from "./Bar";
import MobileBar from "./MobileBar";
import musicActions from "../../store/MusicSlice";

//a function to return a time that converted from seconds to minutes
const getTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

  return `${minutes}:${seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
};

const MusicTimeLine = () => {
  const currentTime = useSelector((state) => state.music.currentTime);
  const musicDuration = useSelector((state) => state.music.duration);
  const dispatch = useDispatch();

  return (
    <>
      <div className="hidden sm:flex items-center gap-x-[15px] w-[60%]">
        <p className="text-white text-[14px]">{getTime(currentTime)}</p>
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
        <p className="text-white text-[14px]">{getTime(musicDuration)}</p>
      </div>
      <MobileBar position={currentTime} maxPosition={musicDuration} />
    </>
  );
};

export default MusicTimeLine;
