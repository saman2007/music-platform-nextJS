import Artist from "./Artist";

const RecentArtists = (props) => {
  const { artists } = props;

  return (
    <div className="max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] flex flex-wrap gap-[5px]">
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
  );
};

export default RecentArtists;
