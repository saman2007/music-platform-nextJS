import Actions from "./Actions/Actions";
import Music from "./Music";
import MusicCover from "./MusicCover";
import MusicInfos from "./MusicInfos";
import MusicListContainer from "./MusicListContainer";
import MusicListenTimes from "./MusicListenTimes";
import { useDispatch } from "react-redux";
import musicActions from "../../store/MusicSlice";

const MusicList = (props) => {
  const { musics, playlistId } = props;
  const dispatch = useDispatch();

  return (
    <MusicListContainer>
      {musics.map((music, index) => (
        <Music
          key={music.name + music.singer}
          isPlaying={music.isPlaying}
          onClickHandler={() => {
            //only if width is smaller than 640px, if user clicked on a music, play that music
            if (window.innerWidth <= 640) {
              dispatch(
                musicActions.setPlaylist({
                  playlist: musics,
                  musicIndex: index,
                  playlistId,
                })
              );
            }
          }}
        >
          <div className="flex-grow items-center flex justify-start gap-x-[10px] overflow-hidden">
            <MusicCover imageSrc={music.cover} />
            <MusicInfos musicName={music.name} musicSinger={music.singer} />
          </div>
          <div className="flex-grow flex justify-end items-center gap-x-[10px]">
            <MusicListenTimes times={music.plays} />
            <Actions
              playHandler={() => {
                //replace the current music with the clicked music
                dispatch(
                  musicActions.setPlaylist({
                    playlist: musics,
                    musicIndex: index,
                    playlistId: 5,
                  })
                );
              }}
              pauseHandler={() => {
                //pause the music
                dispatch(musicActions.pauseMusic());
              }}
              isLike={false}
              musicId={music.id}
              playlistId={playlistId}
            />
          </div>
        </Music>
      ))}
    </MusicListContainer>
  );
};

export default MusicList;
