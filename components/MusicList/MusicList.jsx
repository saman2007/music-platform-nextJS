import Actions from "./Actions/Actions";
import Music from "./Music";
import MusicCover from "./MusicCover";
import MusicInfos from "./MusicInfos";
import MusicListContainer from "./MusicListContainer";
import MusicListenTimes from "./MusicListenTimes";
import { useDispatch } from "react-redux";
import musicActions from "../../store/MusicSlice";
import recentMusicsActions from "../../store/RecentMusicsSlice";

const MusicList = (props) => {
  const { musics, playlistId, title } = props;
  const dispatch = useDispatch();

  return (
    <MusicListContainer title={title}>
      {musics.map((music, index) => (
        <Music
          key={index}
          isPlaying={music.isPlaying}
          music={music}
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
          {props.history ? (
            <div className="lex-grow flex items-center justify-center">
              <p className="text-[12px] text-[#5b5b5b]">{music.date}</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex-grow flex justify-end items-center gap-x-[10px]">
            <MusicListenTimes times={music.plays} />
            <Actions
              history={props.history}
              playHandler={() => {
                //replace the current music with the clicked music
                dispatch(
                  musicActions.setPlaylist({
                    playlist: musics,
                    musicIndex: index,
                    playlistId: playlistId,
                  })
                );
              }}
              pauseHandler={() => {
                //pause the music
                dispatch(musicActions.pauseMusic());
              }}
              musicId={music.id}
              playlistId={playlistId}
              music={music}
            />
          </div>
        </Music>
      ))}
    </MusicListContainer>
  );
};

export default MusicList;
