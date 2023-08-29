import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../../store/MusicSlice";
import PauseIconSolid from "../Icons/PauseIconSolid";
import PlayIcon from "../Icons/PlayIcon";
import CollectionInfos from "./CollectionInfos";
import MusicCollectionContainer from "./MusicCollectionContainer";
import TrackNumbers from "./TracksNumbers";
import musicActions from "../../store/MusicSlice";

//a component that returns a music collections
const MusicCollection = (props) => {
  const { bgImg, color, trackNumbers, title, description, playlistId } = props;
  const dispatch = useDispatch();
  const currentPlaylistId = useSelector((store) => store.music.playlistId);
  const isPlaying = useSelector((store) => store.music.isPlaying);

  return (
    <MusicCollectionContainer bgImg={bgImg} bgColor={color}>
      <TrackNumbers number={trackNumbers} />
      <div className={`w-full flex gap-[8px] items-center p-[10px] z-[2]`}>
        {/* current playlist id is equal to this playlist id and a music is playing,
        it means this play list is playing and display pause icon, else it means this
        playlist is not playing and display play icon */}
        {playlistId === currentPlaylistId && isPlaying ? (
          <PauseIconSolid
            width={"35px"}
            height={"35px"}
            color={"#80da37"}
            onClickHandler={() => {
              dispatch(musicActions.pauseMusic());
            }}
            className="pause-music-button"
          />
        ) : (
          <PlayIcon
            width={"35px"}
            height={"35px"}
            color={"#80da37"}
            onClickHandler={() => {
              /* if this playlist id is equal to this components play list id,
              it means user paused this playlist and if user clicks on this icon again,
              just play the music and dont fetch the datas again */
              if (playlistId === currentPlaylistId)
                dispatch(musicActions.playMusic());
              //else first get the playlist datas and then play the first music of the play list
              else dispatch(getPlaylist(playlistId));
            }}
          />
        )}
        <CollectionInfos title={title} description={description} />
      </div>
    </MusicCollectionContainer>
  );
};

export default MusicCollection;
