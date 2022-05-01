import Actions from "./Actions/Actions";
import Music from "./Music";
import MusicCover from "./MusicCover";
import MusicInfos from "./MusicInfos";
import MusicListContainer from "./MusicListContainer";
import MusicListenTimes from "./MusicListenTimes";
import { useDispatch } from "react-redux";
import musicActions from "../../store/MusicSlice";
import { useSelector } from "react-redux";

const MusicList = (props) => {
  const { musics } = props;
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const currentMusic = useSelector((state) => state.music.currentMusic);

  return (
    <MusicListContainer>
      {musics.map((music) => (
        <Music
          key={music.name + music.singer}
          isPlaying={music.isPlaying}
          onClickHandler={() => {
            //only if width is smaller than 640px, if user clicked on a music, play that music
            if (window.innerWidth <= 640) {
              dispatch(musicActions.setCurrentMusic(music));
              dispatch(musicActions.setIsPlaying(true));
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
                dispatch(musicActions.setCurrentMusic(music));
                //play the music
                dispatch(musicActions.setIsPlaying(true));
              }}
              pauseHandler={() => {
                //pause the music
                dispatch(musicActions.setIsPlaying(false));
              }}
              isLike={false}
              //if the music is playing and its name is qual to the playing name, display the pause button
              isPlaying={isPlaying && currentMusic.name === music.name}
            />
          </div>
        </Music>
      ))}
    </MusicListContainer>
  );
};

export default MusicList;
