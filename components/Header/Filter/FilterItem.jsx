const FilterItem = (props) => {
  const { text, currentFilter, setCurrentFilter } = props;

  let selectedFilterClass =
    currentFilter === text ? "!bg-[#d9d9d9] !text-[#262626] !border-[#d9d9d9]" : "";

  return (
    <span
      onClick={setCurrentFilter}
      className={`${selectedFilterClass} px-[5px] py-[3px] bg-[#262626] text-[#d9d9d9] cursor-pointer border-2 border-solid border-[#323232] text-[15px] rounded-[8px] ml-[5px]`}
    >
      {text}
    </span>
  );
};

export default FilterItem;
