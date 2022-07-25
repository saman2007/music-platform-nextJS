import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: { genres: ["All Genres"], searchGenres: ["all genres"] },
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
  },
});

export const genresReducers = genresSlice.reducer;
export default genresSlice.actions;
