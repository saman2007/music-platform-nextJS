import { configureStore } from "@reduxjs/toolkit";
import { favoriteMusicsReducers } from "./FavoriteMusics";
import { recentMusicsReducers } from "./RecentMusicsSlice";
import { musicReducers } from "./MusicSlice";
import { notificationReducers } from "./NotificatinSlice";

const store = configureStore({
  reducer: {
    music: musicReducers,
    notification: notificationReducers,
    favoriteMusics: favoriteMusicsReducers,
    recentMusics: recentMusicsReducers,
  },
});

export default store;
