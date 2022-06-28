import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isInitialized } from "../helpers/helpers";
import favoriteMusicsAc from "../store/FavoriteMusics";

const useFavoriteMusicsValue = () => {
  const favoriteMusics = useSelector(
    (store) => store.favoriteMusics.favoriteMusics
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialized("favorite_musics"))
      dispatch(favoriteMusicsAc.initFavoriteMusics());
  }, []);

  return {
    musics: favoriteMusics ? favoriteMusics : [],
    isInited: !!favoriteMusics,
  };
};

export default useFavoriteMusicsValue;
