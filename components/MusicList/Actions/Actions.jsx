import { useDispatch, useSelector } from "react-redux";
import Like from "./Like";
import Pause from "./Pause";
import Play from "./Play";
import recentMusicsActions from "../../../store/RecentMusicsSlice";

const Actions = (props) => {
  const { playHandler, pauseHandler, musicId, playlistId, music } = props;
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const currentMusic = useSelector((state) => state.music.currentMusic);
  const currentPlaylistId = useSelector((store) => store.music.playlistId);
  const dispatch = useDispatch();

  return (
    <div className="hidden sm:flex w-[75px] h-[40px] rounded-[25px] items-center border-2 border-[#1db854] dark:border-[#171717] border-solid">
      <Like music={music} />
      {/* only if a music is playing, music id is equal to current music id and playlist id is equal
      to current playlist id, display pause icon in music of play list */}
      {isPlaying &&
      musicId === currentMusic.id &&
      currentPlaylistId === playlistId ? (
        <Pause onClick={pauseHandler} />
      ) : (
        <Play
          onClick={() => {
            if (JSON.stringify(music) !== JSON.stringify(currentMusic)) {
              dispatch(recentMusicsActions.addToLS(music));
            }
            playHandler();
          }}
        />
      )}
    </div>
  );
};

export default Actions;
