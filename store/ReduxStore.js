import { configureStore } from "@reduxjs/toolkit";
import { favoriteMusicsReducers } from "./FavoriteMusics";
import { musicReducers } from "./MusicSlice";
import { notificationReducers } from "./NotificatinSlice";

const store = configureStore({
  reducer: {
    music: musicReducers,
    notification: notificationReducers,
    favoriteMusics: favoriteMusicsReducers,
  },
});

export default store;
