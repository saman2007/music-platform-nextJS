import Play from "../MusicList/Actions/Play";
import musicActions from "../../store/MusicSlice";
import { useDispatch, useSelector } from "react-redux";
import Pause from "../MusicList/Actions/Pause";

const MusicActions = ({ music }) => {
  const dispatch = useDispatch();
  const isPlayingMusic = useSelector((state) => state.music.isPlaying);
  const currentPlayingMusic = useSelector((state) => state.music.currentMusic);

  return (
    <div className="p-[5px] col-start-1 col-end-6 row-start-1 row-end-3 flex items-center gap-x-[10px]">
      <div className="w-[45px] h-[45px]">
        {isPlayingMusic &&
        JSON.stringify(currentPlayingMusic) === JSON.stringify(music) ? (
          <Pause
            onClick={() => {
              dispatch(musicActions.pauseMusic());
            }}
          />
        ) : (
          <Play
            onClick={() => {
              if (
                JSON.stringify(music) === JSON.stringify(currentPlayingMusic)
              ) {
                dispatch(musicActions.playMusic());
              } //replace the current music with the clicked music
              else dispatch(musicActions.initMusic(music));
            }}
          />
        )}
      </div>
      <div className="w-full flex flex-col gap-y-[10px]">
        <h1 className="break-all text-[19px] w-fit bg-[#161616c4] px-[5px] py-[2px] rounded-[10px] text-white">
          {music.name}
        </h1>
        <p className="break-all text-[19px] bg-[#161616c4] w-fit px-[5px] py-[2px] rounded-[10px] text-white">
          {music.singer}
        </p>
      </div>
    </div>
  );
};

export default MusicActions;
