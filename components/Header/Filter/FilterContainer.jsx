import AdjustmentsIcon from "@heroicons/react/outline/AdjustmentsIcon";
import FilterItem from "./FilterItem";
import { useDispatch, useSelector } from "react-redux";
import filtersActions from "../../../store/FiltersSlice";
import FilterPopup from "./FiltersPopup/FiltersPopup";

const FilterContainer = () => {
  const selectedFilters = useSelector((store) => store.filters.searchGenres);
  const featuredGenres = useSelector((store) => store.filters.allFeaturedGenres);
  const dispatch = useDispatch();

  return (
    <div className="w-[400px] h-full hidden md:flex items-center justify-end">
      <div className="overflow-x-auto mr-[10px] flex items-center">
        {featuredGenres.map(({ name: genre, id }) => (
          <FilterItem
            key={id}
            margin
            text={genre}
            currentFilters={selectedFilters}
            setCurrentFilter={() => {
              let genreIndex = selectedFilters.findIndex(
                (value) => value === genre
              );

              //if genre index is not equal to -1, it means that the clicked genre filter should be unselected
              if (genreIndex !== -1) {
                //if the length of current genres is 1, it meeans after deselecting the genre, no genre is selected. so replace the current genres with All genres
                if (selectedFilters.length === 1)
                  dispatch(
                    filtersActions.replaceGenres({
                      data: "all genres",
                      type: "searchGenres",
                    })
                  );
                //else, deselect the genre
                else
                  dispatch(
                    filtersActions.removeSpecificGenre({
                      index: genreIndex,
                      type: "searchGenres",
                    })
                  );
              } else
                dispatch(
                  filtersActions.addGenre({ data: genre, type: "searchGenres" })
                );

              //if genres includes All genre, the index of All genres should be removed
              selectedFilters.includes("all genres") &&
                dispatch(
                  filtersActions.removeSpecificGenre({
                    index: 0,
                    type: "searchGenres",
                  })
                );
            }}
          />
        ))}
      </div>
      <div className="py-[5px] flex justify-center items-center">
        <div className="relative flex px-[5px] cursor-pointer justify-center items-center border-l border-solid border-l-[#889096] dark:border-l-[#232323]">
          <FilterPopup>
            <div className="flex justify-center items-center">
              <AdjustmentsIcon className="text-[#1db854] dark:text-[#d9d9d9] w-[24px] h-full" />
              <p className="text-[14px] text-[#889096] dark:text-[#d9d9d9]">Filters</p>
            </div>
          </FilterPopup>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
