import Artist from "./Artist";

const Artists = ({ artists }) => {
  return (
    <div className="w-full h-full flex items-center flex-col gap-y-[10px]">
      {artists.map((data) => (
        <Artist
          alt={data.name}
          monthlyListens={data.monthly_plays}
          musicsNumber={data.tracks}
          name={data.name}
          src={data.profile}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default Artists;
