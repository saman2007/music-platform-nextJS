import { createSlice } from "@reduxjs/toolkit";

//a slice to manage users favorite musics
const recentMusicsSlice = createSlice({
  name: "recent_musics",
  initialState: {
    recentMusics: null,
    updateTime: 0,
  },
  reducers: {
    //to add new music to recent musics
    addToLS: (state, action) => {
      //initialize the recent musics state if it is empty
      if (!state.recentMusics)
        state.recentMusics = JSON.parse(
          localStorage.getItem("recent_musics") ?? "[]"
        );

      const date = new Date();
      //create a new object with some new properties
      const newMusic = {
        ...action.payload,
        hsId: state.recentMusics.length,
        date: `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
      };

      const findedIndex = state.recentMusics.findIndex(
        (data) => data.id === action.payload.id
      );

      //if there is a music matched with created new object, delete that index
      if (findedIndex !== -1) {
        state.recentMusics.splice(findedIndex, 1);
      }

      //add the created music to the first of the array
      state.recentMusics.unshift(newMusic);
      localStorage.setItem("recent_musics", JSON.stringify(state.recentMusics));
    },
    //to initialize the recentMusics state
    initHistoryMusics: (state) => {
      state.recentMusics = JSON.parse(
        localStorage.getItem("recent_musics") ?? "[]"
      );
    },
    //to replace a new array with the old one in the recent musics state
    replaceLSDatas: (state, action) => {
      state.recentMusics = action.payload;
      localStorage.setItem("recent_musics", JSON.stringify(action.payload));
      state.updateTime++;
    },
  },
});

export const recentMusicsReducers = recentMusicsSlice.reducer;
export default recentMusicsSlice.actions;
