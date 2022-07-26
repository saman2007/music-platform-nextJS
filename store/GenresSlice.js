import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: ["All Genres"],
    searchGenres: ["all genres"],
    allGenres: [],
    allFeaturedGenres: [],
  },
  reducers: {
    replaceGenres: (state, actions) => {
      state[actions.payload.type] = [actions.payload.data];
    },
    removeSpecificGenre: (state, actions) => {
      state[actions.payload.type].splice(actions.payload.index, 1);
    },
    addGenre: (state, actions) => {
      state[actions.payload.type].push(actions.payload.data);
    },
    replaceAllGenres: (state, actions) => {
      state.allGenres = actions.payload;
      state.allFeaturedGenres = actions.payload.filter(
        (data) => data.isFeature
      );
    },
  },
});

export const genresReducers = genresSlice.reducer;
export default genresSlice.actions;
