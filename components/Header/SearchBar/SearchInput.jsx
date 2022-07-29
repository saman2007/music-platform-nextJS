const SearchInput = (props) => {
  return (
    <input
      type="text"
      onChange={props.updateSearch}
      placeholder="search..."
      className="bg-transparent outline-none w-full h-full text-[#d9d9d9]"
    />
  );
};

export default SearchInput;
