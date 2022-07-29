const AllGenresBtn = (props) => {
  const { setAllGenres, currentGenre } = props;

  let selectedFilterClass =
    currentGenre === "all genres" ? "!bg-[#1db854] dark:!bg-[#d9d9d9] !text-[#d9d9d9] dark:!text-[#262626]" : "";

  return (
    <span
      onClick={setAllGenres}
      className={`${selectedFilterClass} w-full py-[10px] text-center bg-[#787b7e] dark:bg-[#1a1a1a] text-[#d9d9d9] cursor-pointer text-[15px] rounded-[8px]`}
    >
      all genres
    </span>
  );
};

export default AllGenresBtn;
