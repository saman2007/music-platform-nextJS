import Link from "next/link";

//a component to display music infos like cover image, singer name and etc
const MusicInfos = (props) => {
  const { name, singer, singerPage, musicPage } = props;

  return (
    <div className="flex-grow overflow-hidden">
      <h1 className="whitespace-nowrap text-ellipsis w-full text-[17px] leading-[20px] text-[#d0d0d0] overflow-hidden">
        <Link href={musicPage}>
          <a className="hover:text-[#5b5b5b]">{name}</a>
        </Link>
      </h1>
      <p className="whitespace-nowrap text-ellipsis w-full text-[14px] leading-[20px] text-[#5b5b5b] overflow-hidden">
        <Link href={singerPage}>
          <a className="hover:text-[#d0d0d0]">{singer}</a>
        </Link>
      </p>
    </div>
  );
};

export default MusicInfos;
