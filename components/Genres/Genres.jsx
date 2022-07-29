import { useDispatch, useSelector } from "react-redux";
import filtersActions from "../../store/FiltersSlice";
import Genre from "../Header/Filter/FilterItem";
import AllGenresBtn from "./AllGenresBtn";
import GenresContainer from "./GenresContainer";

const Genres = (props) => {
  const { genres } = props;
  const currentGenres = useSelector((store) => store.filters.genres);
  const dispatch = useDispatch();

  return (
    <GenresContainer>
      <div className="flex flex-wrap gap-x-[5px] gap-y-[7px] mb-[10px]">
        {genres.map(({name: genre, id}) => (
          <Genre
            key={id}
            setCurrentFilter={() => {
              let genreIndex = currentGenres.findIndex(
                (value) => value === genre
              );

              //if genre index is not equal to -1, it means that the clicked genre filter should be unselected
              if (genreIndex !== -1) {
                //if the length of current genres is 1, it meeans after deselecting the genre, no genre is selected. so replace the current genres with All genres
                if (currentGenres.length === 1)
                  dispatch(
                    filtersActions.replaceGenres({
                      data: "all genres",
                      type: "genres",
                    })
                  );
                //else, deselect the genre
                else
                  dispatch(
                    filtersActions.removeSpecificGenre({
                      index: genreIndex,
                      type: "genres",
                    })
                  );
              }
              //add the genre to the genres list
              else
                dispatch(
                  filtersActions.addGenre({ data: genre, type: "genres" })
                );

              //if genres includes All genre, the index of All genres should be removed
              currentGenres.includes("all genres") &&
                dispatch(
                  filtersActions.removeSpecificGenre({
                    index: 0,
                    type: "genres",
                  })
                );
            }}
            currentFilters={currentGenres.find((data) => data === genre)}
            text={genre}
          />
        ))}
      </div>
      <AllGenresBtn
        setAllGenres={() => {
          dispatch(
            filtersActions.replaceGenres({ data: "all genres", type: "genres" })
          );
        }}
        currentGenre={currentGenres.find((data) => data === "all genres")}
      />
    </GenresContainer>
  );
};

export default Genres;
