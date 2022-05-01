import Artist from "./Artist";

const RecentArtists = (props) => {
  const { artists } = props;

  return (
    <div className="max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] mb-[20px]">
      <h2 className="text-[18px] text-white mb-[10px]">Recent Artists</h2>
      <div className=" flex flex-wrap gap-[5px]">
        {artists.map((data) => (
          <Artist
            background={data.background}
            color={data.color}
            radius={data.radius}
            page={data.page}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentArtists;
