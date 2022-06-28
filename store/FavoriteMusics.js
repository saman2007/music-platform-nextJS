import { createSlice } from "@reduxjs/toolkit";

//a slice to manage users favorite musics
const favoriteMusicsSlice = createSlice({
  name: "favorite_musics",
  initialState: {
    favoriteMusics: null,
  },
  reducers: {
    //to add an item to local storage
    addToLS: (state, action) => {
      state.favoriteMusics.push(action.payload);

      localStorage.setItem(
        "favorite_musics",
        JSON.stringify(state.favoriteMusics)
      );
    },
    //to remove an item from local storage
    removeFromLS: (state, action) => {
      state.favoriteMusics.splice(action.payload, 1);

      localStorage.setItem(
        "favorite_musics",
        JSON.stringify(state.favoriteMusics)
      );
    },
    //to initialize the favorite musics state
    initFavoriteMusics: (state) => {
      state.favoriteMusics = JSON.parse(
        localStorage.getItem("favorite_musics")
      );
    },
    //to replace the local storage and favorite musics state datas
    replaceLSDatas: (state, action) => {
      state.favoriteMusics = action.payload;
      localStorage.setItem("favorite_musics", JSON.stringify(action.payload));
    },
  },
});

export const addFavoriteMusic = (music) => {
  return (dispatch, store) => {
    const lSDatas = JSON.parse(localStorage.getItem("favorite_musics"));
    let index = null;

    if (music) {
      index = lSDatas.findIndex((data) => music === data);
    } else {
      index = lSDatas.findIndex(
        (data) => JSON.stringify(data) === store().music.currentMusic.id
      );
    }

    if (index === -1) {
      if (music) dispatch(favoriteMusicsSlice.actions.addToLS(music));
      else
        dispatch(
          favoriteMusicsSlice.actions.addToLS(store().music.currentMusic.id)
        );
    }
  };
};

export const removeFavoriteMusic = (music) => {
  return (dispatch, store) => {
    const lSDatas = JSON.parse(localStorage.getItem("favorite_musics"));
    let index = null;

    if (music) {
      index = lSDatas.findIndex(
        (data) => JSON.stringify(music) === JSON.stringify(data)
      );
    } else {
      index = lSDatas.findIndex(
        (data) =>
          JSON.stringify(data) === JSON.stringify(store().music.currentMusic)
      );
    }

    if (index !== -1) {
      dispatch(favoriteMusicsSlice.actions.removeFromLS(index));
    }
  };
};

export const favoriteMusicsReducers = favoriteMusicsSlice.reducer;
export default favoriteMusicsSlice.actions;
