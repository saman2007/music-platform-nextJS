const SearchInput = (props) => {
  return (
    <input
      type="text"
      onChange={props.updateSearch}
      placeholder="search..."
      className="bg-transparent outline-none w-full h-full text-black dark:text-[#d9d9d9] placeholder:text-[#1db854] placeholder:dark:text-white"
    />
  );
};

export default SearchInput;
