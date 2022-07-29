import { useRef } from "react";
import { useState } from "react";
import FilterContainer from "../Filter/FilterContainer";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";
import SearchInputPopup from "./SearchInputPopup";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const formRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };

  return (
    <form
      onSubmit={submitHandler}
      ref={formRef}
      className="flex-grow md:relative bg-[#1a1a1a] items-center border-2 border-solid border-[#2d2d2d] px-[2px] rounded-[25px] flex"
    >
      <SearchBtn />
      <SearchInputPopup formRef={formRef} searchInput={searchInput}>
        <div className="flex-grow w-full h-full ml-[5px]">
          <SearchInput
            updateSearch={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
      </SearchInputPopup>
      <FilterContainer />
    </form>
  );
};

export default SearchForm;
