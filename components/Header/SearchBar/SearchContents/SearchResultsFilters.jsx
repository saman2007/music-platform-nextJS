import { useDispatch, useSelector } from "react-redux";
import FilterItem from "../../Filter/FilterItem";
import filtersActions from "../../../../store/FiltersSlice";

const SearchResultsFilters = () => {
  const currentSearchResultsFilters = useSelector(
    (store) => store.filters.searchResultsFilters
  );
  const dispatch = useDispatch();

  return (
    <div className="mb-[15px]">
      <p className="text-[16px] text-white mb-[3px]">search results filters</p>
      <div className="gap-[5px] flex flex-row overflow-x-auto">
        {["artists", "musics", "albums", "all"].map((data) => (
          <FilterItem
            text={data}
            inSearchBar
            currentFilters={currentSearchResultsFilters}
            setCurrentFilter={() => {
              if (data === "all") {
                dispatch(
                  filtersActions.replaceGenres({
                    data,
                    type: "searchResultsFilters",
                  })
                );
                return;
              }

              let filterIndex = currentSearchResultsFilters.findIndex(
                (value) => value === data
              );

              if (filterIndex !== -1) {
                if (currentSearchResultsFilters.length === 1)
                  dispatch(
                    filtersActions.replaceGenres({
                      data: "all",
                      type: "searchResultsFilters",
                    })
                  );
                else
                  dispatch(
                    filtersActions.removeSpecificGenre({
                      index: filterIndex,
                      type: "searchResultsFilters",
                    })
                  );
              } else
                dispatch(
                  filtersActions.addGenre({
                    data,
                    type: "searchResultsFilters",
                  })
                );

              currentSearchResultsFilters.includes("all") &&
                dispatch(
                  filtersActions.removeSpecificGenre({
                    index: 0,
                    type: "searchResultsFilters",
                  })
                );
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsFilters;
