const FilterItem = (props) => {
  const { text, currentFilters, setCurrentFilter, margin } = props;

  let selectedFilterClass =
    currentFilters?.includes(text)
      ? "!bg-[#1db854] dark:!bg-[#d9d9d9] dark:!text-[#262626] dark:!border-[#d9d9d9]"
      : "";

  let marginL = margin ? "ml-[5px]" : "";

  return (
    <span
      onClick={setCurrentFilter}
      className={`${selectedFilterClass} ${props.inSearchBar ? "max-w-fit min-w-fit" : "flex-grow"}  text-center px-[5px] py-[3px] bg-[#787b7e] dark:bg-[#262626] text-[#d9d9d9] cursor-pointer border-2 border-solid border-[#1db854] dark:border-[#323232] text-[15px] rounded-[8px] ${marginL}`}
    >
      {text}
    </span>
  );
};

export default FilterItem;
