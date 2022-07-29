import Link from "next/link";

const MusicInfos = (props) => {
  const { musicName, musicSinger, singerPage, musicPage } = props;

  return (
    <div className="flex-grow overflow-hidden">
      <Link href={musicPage}>
        <a className="whitespace-nowrap block text-ellipsis w-full text-[17px] leading-[20px] text-black dark:text-[#d0d0d0] overflow-hidden">
          {musicName}
        </a>
      </Link>
      <Link href={singerPage}>
        <a className="whitespace-nowrap block text-ellipsis w-full text-[14px] leading-[20px] text-black dark:text-[#5b5b5b] overflow-hidden">
          {musicSinger}
        </a>
      </Link>
    </div>
  );
};

export default MusicInfos;
