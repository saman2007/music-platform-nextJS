import { useDispatch, useSelector } from "react-redux";
import FilterItem from "../FilterItem";
import filtersActions from "../../../../store/FiltersSlice";

const FiltersItems = ({ inSearchBar }) => {
  const selectedFilters = useSelector((store) => store.filters.searchGenres);
  const genres = useSelector((store) => store.filters.allGenres);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full h-full flex ${
        inSearchBar ? "overflow-x-auto" : "flex-wrap"
      } gap-[5px]`}
    >
      {genres.map(({ name: genre, id }) => (
        <FilterItem
          inSearchBar={inSearchBar}
          key={id}
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
  );
};

export default FiltersItems;
