const GenresContainer = (props) => {
  return (
    <div className="w-full sm:w-[50%] md:w-[250px] h-fit flex flex-col justify-between mb-[45px] md:mb-0">
      <h2 className="text-[18px] text-white mb-[10px]">Genres</h2>
      {props.children}
    </div>
  );
};

export default GenresContainer;
