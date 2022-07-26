import { useDispatch, useSelector } from "react-redux";
import FilterItem from "../FilterItem";
import genresActions from "../../../../store/GenresSlice";

const FiltersItems = () => {
  const selectedFilters = useSelector((store) => store.genres.searchGenres);
  const genres = useSelector((store) => store.genres.allGenres);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full flex flex-wrap gap-[5px]">
      {genres.map(({ name: genre, id }) => (
        <FilterItem
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
                  genresActions.replaceGenres({
                    data: "all genres",
                    type: "searchGenres",
                  })
                );
              //else, deselect the genre
              else
                dispatch(
                  genresActions.removeSpecificGenre({
                    index: genreIndex,
                    type: "searchGenres",
                  })
                );
            } else
              dispatch(
                genresActions.addGenre({ data: genre, type: "searchGenres" })
              );

            //if genres includes All genre, the index of All genres should be removed
            selectedFilters.includes("all genres") &&
              dispatch(
                genresActions.removeSpecificGenre({
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
