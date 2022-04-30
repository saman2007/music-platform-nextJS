import { configureStore } from "@reduxjs/toolkit";
import { MusicReducers } from "./MusicSlice";

const store = configureStore({
  reducer: {
    music: MusicReducers,
  },
});

export default store;
