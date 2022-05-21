import { useSelector } from "react-redux";
import Like from "./Like";
import Pause from "./Pause";
import Play from "./Play";

const Actions = (props) => {
  const { isLike, playHandler, pauseHandler, musicId, playlistId } = props;
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const currentMusic = useSelector((state) => state.music.currentMusic);
  const currentPlaylistId = useSelector((store) => store.music.playlistId);

  return (
    <div className="hidden sm:flex w-[75px] h-[40px] rounded-[25px] items-center border-2 border-[#171717] border-solid">
      <Like like={isLike} />
      {/* only if a music is playing, music id is equal to current music id and playlist id is equal
      to current playlist id, display pause icon in music of play list */}
      {isPlaying && musicId === currentMusic.id && currentPlaylistId === playlistId ? (
        <Pause onClick={pauseHandler} />
      ) : (
        <Play onClick={playHandler} />
      )}
    </div>
  );
};

export default Actions;
