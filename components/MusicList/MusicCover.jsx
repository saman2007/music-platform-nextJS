const MusicCover = (props) => {
  const { imageSrc } = props;

  return (
    <img
      src={imageSrc}
      className="max-w-[45px] min-w-[45px] max-h-[45px] min-h-[45px] rounded-[10px]"
      alt="music-cover"
    />
  );
};

export default MusicCover;
