import Actions from "./Actions/Actions";
import Music from "./Music";
import MusicCover from "./MusicCover";
import MusicInfos from "./MusicInfos";
import MusicListContainer from "./MusicListContainer";
import MusicListenTimes from "./MusicListenTimes";

const MusicList = (props) => {
  const { musics } = props;

  return (
    <MusicListContainer>
      {musics.map((music) => (
        <Music key={music.name + music.singer} isPlaying={music.isPlaying}>
          <div className="flex-grow items-center flex justify-start gap-x-[10px] overflow-hidden">
            <MusicCover imageSrc={music.cover} />
            <MusicInfos musicName={music.name} musicSinger={music.singer} />
          </div>
          <div className="flex-grow flex justify-end items-center gap-x-[10px]">
            <MusicListenTimes times={music.listenTimes} />
            <Actions isLike={music.like} />
          </div>
        </Music>
      ))}
    </MusicListContainer>
  );
};

export default MusicList;
