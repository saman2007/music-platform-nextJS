import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import musicActions from "../../store/MusicSlice";
import NextPrevious from "./Actions/NextPrevious";
import Pause from "./Actions/Pause";
import Play from "./Actions/Play";
import Audio from "./Audio";
import MusicCoverImage from "./MusicCoverImage";
import MusicInfos from "./MusicInfos";
import MusicTimeLine from "./MusicTimeLine";
import VolumeBar from "./VolumeBar";

//a component to display actions buttons and music infos
const MusicActionsBar = (props) => {
  const { cover, musicName, musicSinger, singerPage, musicPage, currentMusic } =
    props;
  const playingMusic = useSelector((state) => state.music.currentMusic);
  const isPlayingMusic = useSelector((state) => state.music.isPlaying);
  const musicRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    //if music ref is redy
    if (musicRef) {
      //set the current musics path
      dispatch(musicActions.setCurrentMusic(currentMusic));
      //when metadata of audio loaded, set the music duration
      musicRef.current.onloadedmetadata = () => {
        dispatch(musicActions.setDuration(musicRef.current.duration));
      };
      //on each time update, update the currentTime state
      musicRef.current.ontimeupdate = () => {
        dispatch(musicActions.setCurrentTime(musicRef.current.currentTime));
      };
      //when music is finished, the music will be paused
      musicRef.current.onended = () => {
        dispatch(musicActions.setIsPlaying(false));
      };
    }
  }, [currentMusic]);

  useEffect(() => {
    const onSpaceClick = (e) => {
      console.log(e.keyCode);
      //if user clicked on spacebar, music should be paused or play
      if (e.keyCode === 32) {
        dispatch(musicActions.setIsPlaying(!isPlayingMusic));
        if (!isPlayingMusic) musicRef.current.play();
        else musicRef.current.pause();
        //if user clicked on arrow right, music current time will be increased by 5 seconds
      } else if (e.keyCode === 39) {
        musicRef.current.currentTime += 5;
        //if user clicked on arrow left, music current time will be decreased by 5 seconds
      } else if (e.keyCode === 37) {
        musicRef.current.currentTime -= 5;
      }
    };

    window.addEventListener("keydown", onSpaceClick);

    return () => {
      window.removeEventListener("keydown", onSpaceClick);
    };
  }, [isPlayingMusic]);

  return (
    <div className="px-[15px] gap-x-[20px] py-[5px] row-start-11 row-end-12 col-start-1 col-end-[13] bg-[#212121] rounded-t-[15px] flex justify-between items-center">
      <Audio source={playingMusic} ref={musicRef} />
      <div className="min-w-fit max-w-[200px] transition duration-300 h-full p-[4px] gap-x-[10px] flex justify-center items-center hover:bg-[#383838] rounded-[10px]">
        <MusicCoverImage src={cover} />
        <MusicInfos
          name={musicName}
          singer={musicSinger}
          singerPage={singerPage}
          musicPage={musicPage}
        />
      </div>
      <div className="flex flex-grow gap-x-[15px]">
        <div className="flex gap-x-[5px] justify-center items-center">
          <NextPrevious kind="next" />
          {isPlayingMusic ? (
            <Pause
              pauseMusic={() => {
                musicRef.current.pause();
              }}
            />
          ) : (
            <Play
              playMusic={() => {
                musicRef.current.play();
              }}
            />
          )}
          <NextPrevious kind="previous" />
        </div>

        <div className="flex justify-around w-full">
          <MusicTimeLine
            setNewTime={(number) => {
              console.log("in setNewTime func");
              musicRef.current.currentTime = number;
              dispatch(musicActions.setCurrentTime(number));
            }}
          />
          <VolumeBar
            mute={() => {
              musicRef.current.muted = true;
            }}
            unmute={() => {
              musicRef.current.muted = false;
            }}
            setVolume={(volume) => {
              musicRef.current.volume = volume;
              dispatch(musicActions.setCurrentVolume(volume));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicActionsBar;
