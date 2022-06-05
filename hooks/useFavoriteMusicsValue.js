import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import favoriteMusicsAc from "../store/FavoriteMusics";

const useFavoriteMusicsValue = () => {
  const favoriteMusics = useSelector(
    (store) => store.favoriteMusics.favoriteMusics
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //if favorite musics state is null, initial the state
    if (!favoriteMusics) {
      dispatch(
        favoriteMusicsAc.initFavoriteMusics(
          JSON.parse(localStorage.getItem("favorite_musics"))
        )
      );
    }
  }, []);

  return {
    musics: favoriteMusics ? favoriteMusics : [],
    isInited: !!favoriteMusics,
  };
};

export default useFavoriteMusicsValue;
