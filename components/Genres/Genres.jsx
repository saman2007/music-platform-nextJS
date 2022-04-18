import { useState } from "react";
import Genre from "../Header/Filter/FilterItem";
import AllGenresBtn from "./AllGenresBtn";
import GenresContainer from "./GenresContainer";

const Genres = (props) => {
  const { genres } = props;

  const [currentGenres, setCurrentGenres] = useState(["All genres"]);

  return (
    <GenresContainer>
      <div className="flex flex-wrap gap-x-[5px] gap-y-[7px] mb-[10px]">
        {genres.map((genre) => (
          <Genre
            key={genre}
            setCurrentFilter={() => {
              setCurrentGenres((prevState) => {
                let genreIndex = prevState.findIndex(
                  (value) => value === genre
                );

                //if genre index is not equal to -1, it means that the clicked genre filter should be unselected
                if (genreIndex !== -1) {
                  let oldState = Array(...currentGenres);
                  oldState.splice(genreIndex, 1);
                  return oldState;
                }

                //if genres includes All genre, the index of All genres should be removed
                let oldGenres = prevState.includes("All genres")
                  ? [...prevState.slice(0, 0)]
                  : [...prevState];
                return [...oldGenres, genre];
              });
            }}
            currentFilter={currentGenres.find((data) => data === genre)}
            text={genre}
          />
        ))}
      </div>
      <AllGenresBtn
        setAllGenres={() => {
          setCurrentGenres(["All genres"]);
        }}
        currentGenre={currentGenres.find((data) => data === "All genres")}
      />
    </GenresContainer>
  );
};

export default Genres;
