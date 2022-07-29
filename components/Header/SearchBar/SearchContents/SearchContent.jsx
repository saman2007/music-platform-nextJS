import FiltersItems from "../../Filter/FiltersPopup/Filters";
import Results from "./Results";
import SearchedFor from "./SearchedFor";
import SearchResultsFilters from "./SearchResultsFilters";

const SearchContent = ({ text }) => {
  return (
    <div className="w-full max-h-[70vh] overflow-y-auto">
      <SearchedFor text={text} />
      <SearchResultsFilters />
      <div className="md:hidden mb-[25px]">
        <p className="text-[16px] text-white mb-[3px]">genres filter</p>
        <FiltersItems inSearchBar />
      </div>
      <Results />
    </div>
  );
};

export default SearchContent;
