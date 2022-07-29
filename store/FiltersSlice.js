import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    genres: ["all genres"],
    searchGenres: ["all genres"],
    searchResultsFilters: ["all"],
    allGenres: [],
    allFeaturedGenres: [],
    allSearchResultsFilters: ["artists", "musics", "albums"],
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

export const filtersReducers = filtersSlice.reducer;
export default filtersSlice.actions;
