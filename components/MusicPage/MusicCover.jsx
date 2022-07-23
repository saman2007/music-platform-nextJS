import Image from "next/image";

const MusicCover = (props) => {
  const { src } = props;

  return (
    <div className="relative col-start-6 col-end-7 sm:h-full row-start-1 row-end-2 sm:row-end-[8]">
      <Image
        src={src}
        alt="music-cover"
        layout="fill"
        objectFit="fill"
        className="rounded-[15px]"
      />
    </div>
  );
};

export default MusicCover;
