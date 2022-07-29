const AllGenresBtn = (props) => {
  const { setAllGenres, currentGenre } = props;

  let selectedFilterClass =
    currentGenre === "all genres" ? "!bg-[#d9d9d9] !text-[#262626]" : "";

  return (
    <span
      onClick={setAllGenres}
      className={`${selectedFilterClass} w-full py-[10px] text-center bg-[#1a1a1a] text-[#d9d9d9] cursor-pointer text-[15px] rounded-[8px]`}
    >
      all genres
    </span>
  );
};

export default AllGenresBtn;
