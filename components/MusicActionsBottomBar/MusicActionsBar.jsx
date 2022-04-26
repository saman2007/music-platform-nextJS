import NextPrevious from "./Actions/NextPrevious";
import Pause from "./Actions/Pause";
import MusicCoverImage from "./MusicCoverImage";
import MusicInfos from "./MusicInfos";
import MusicTimeLine from "./MusicTimeLine";

//a component to display actions buttons and music infos
const MusicActionsBar = () => {
  return (
    <div className="px-[15px] gap-x-[20px] py-[5px] row-start-11 row-end-12 col-start-1 col-end-[13] bg-[#212121] rounded-t-[15px] flex justify-between items-center">
      <div className="min-w-fit max-w-[200px] transition duration-300 h-full p-[4px] gap-x-[10px] flex justify-center items-center hover:bg-[#383838] rounded-[10px]">
        <MusicCoverImage src="./safir-tafrigh.jpg" />
        <MusicInfos
          name="lalai"
          singer="safir"
          singerPage="/safir"
          musicPage="/lalai"
        />
      </div>
      <div className="flex flex-grow gap-x-[15px]">
        <div className="flex gap-x-[5px] justify-center items-center">
          <NextPrevious kind="next" />
          <Pause />
          <NextPrevious kind="previous" />
        </div>
        <MusicTimeLine currentTime={130} musicTime={140} />
      </div>
    </div>
  );
};

export default MusicActionsBar;
