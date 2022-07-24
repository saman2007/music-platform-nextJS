const ArtistInfos = ({ name, monthlyListens, musicsNumber }) => {
  return (
    <div className="flex-grow flex sm:flex-row flex-col justify-around items-center text-white">
      <p className="text-[18px] font-bold text-center">{name}</p>
      <p className="text-[16px] text-center">monthly listens: {monthlyListens}</p>
      <p className="text-[16px] text-center">musics: {musicsNumber}</p>
    </div>
  );
};

export default ArtistInfos;
