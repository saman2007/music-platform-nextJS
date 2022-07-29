import SearchCircleIcon from "@heroicons/react/outline/SearchCircleIcon";

const SearchBtn = () => {
  return (
    <button type="submit" className="min-w-[30px] max-w-[30px] h-full text-[#1db854] dark:text-[#d9d9d9]">
      <SearchCircleIcon className="w-full h-full" />
    </button>
  );
};

export default SearchBtn;
