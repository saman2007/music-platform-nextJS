import MusicActions from "./MusicActions";
import MusicCover from "./MusicCover";
import MusicWaveBar from "./MusicWaveBar";

const MusicInfosContainer = (props) => {
  const { music } = props;

  return (
    <div className="relative w-full min-h-[300px] rounded-[20px] grid mb-[10px] bg-[#cfcfcf] dark:bg-[#0d0d0d] p-[5px] grid-cols-[repeat(5,auto)_100px] grid-rows-[100px_repeat(5,auto)] sm:grid-cols-[repeat(5,auto)_300px] sm:grid-rows-[repeat(6,auto)]">
      <MusicActions music={music} />
      <MusicCover src={music.cover} />
      <MusicWaveBar musicLink={music.link} />
    </div>
  );
};

export default MusicInfosContainer;
