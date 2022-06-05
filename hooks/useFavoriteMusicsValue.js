import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import favoriteMusicsAc from "../store/FavoriteMusics";

const useFavoriteMusicsValue = () => {
  const favoriteMusics = useSelector(
    (store) => store.favoriteMusics.favoriteMusics
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //a function to check the local storage
    function checkLS() {
      const lSDatas = localStorage.getItem("favorite_musics");

      //if there is no item with favorite_musics name, initialize the local storage
      if (!lSDatas) {
        localStorage.setItem("favorite_musics", JSON.stringify([]));
      }

      dispatch(favoriteMusicsAc.initFavoriteMusics(JSON.parse(lSDatas)));
    }
    checkLS();
  }, []);

  return {
    musics: favoriteMusics ? favoriteMusics : [],
    isInited: !!favoriteMusics,
  };
};

export default useFavoriteMusicsValue;
