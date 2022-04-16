const SearchInput = (props) => {
  return (
    <input
      type="text"
      onChange={props.updateSearch}
      placeholder="search..."
      className="bg-transparent outline-none flex-grow w-full h-full ml-[5px] text-[#d9d9d9]"
    />
  );
};

export default SearchInput;
