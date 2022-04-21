const MusicInfos = (props) => {
  const { musicName, musicSinger } = props;

  return (
    <div className="flex-grow overflow-hidden">
      <h1 className="whitespace-nowrap text-ellipsis w-full text-[17px] leading-[20px] text-[#d0d0d0] overflow-hidden">
        {musicName}
      </h1>
      <p className="whitespace-nowrap text-ellipsis w-full text-[14px] leading-[20px] text-[#5b5b5b] overflow-hidden">
        {musicSinger}
      </p>
    </div>
  );
};

export default MusicInfos;
