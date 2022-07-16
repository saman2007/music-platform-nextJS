import Image from "next/image";

//a component to display cover of playing music
const MusicCoverImage = (props) => {
  const { src } = props;

  return (
    <div className="relative rounded-[10px] w-[50px] h-[50px]">
      <Image
        className="w-full h-full absolute rounded-[10px]"
        layout="fill"
        objectFit="cover"
        src={src}
      />
    </div>
  );
};

export default MusicCoverImage;
