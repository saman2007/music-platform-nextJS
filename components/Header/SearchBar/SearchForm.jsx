import { useState } from "react";
import FilterContainer from "../Filter/FilterContainer";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex-grow bg-[#1a1a1a] items-center border-2 border-solid border-[#2d2d2d] px-[2px] rounded-[25px] flex"
    >
      <SearchBtn />
      <SearchInput
        updateSearch={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <FilterContainer />
    </form>
  );
};

export default SearchForm;
