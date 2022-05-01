import Like from "./Like";
import Pause from "./Pause";
import Play from "./Play";

const Actions = (props) => {
  const { isLike, playHandler, pauseHandler, isPlaying } = props;
  return (
    <div className="hidden sm:flex w-[75px] h-[40px] rounded-[25px] items-center border-2 border-[#171717] border-solid">
      <Like like={isLike} />
      {!isPlaying ? (
        <Play onClick={playHandler} />
      ) : (
        <Pause onClick={pauseHandler} />
      )}
    </div>
  );
};

export default Actions;
