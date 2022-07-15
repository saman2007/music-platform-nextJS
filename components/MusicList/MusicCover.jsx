import Image from "next/image";

const MusicCover = (props) => {
  const { imageSrc } = props;

  return (
    <div className="relative max-w-[45px] min-w-[45px] max-h-[45px] min-h-[45px] rounded-[10px]">
      <Image src={imageSrc} alt="music-cover" layout="fill" objectFit="cover" className="rounded-[10px]" />
    </div>
  );
};

export default MusicCover;
