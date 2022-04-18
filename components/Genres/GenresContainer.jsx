const GenresContainer = (props) => {
  return (
    <div className="w-[250px] h-fit flex flex-col justify-between">
      <h2 className="text-[18px] text-white mb-[10px]">Genres</h2>
      {props.children}
    </div>
  );
};

export default GenresContainer;
