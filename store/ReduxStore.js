import { configureStore } from "@reduxjs/toolkit";
import { favoriteMusicsReducers } from "./FavoriteMusics";
import { recentMusicsReducers } from "./RecentMusicsSlice";
import { musicReducers } from "./MusicSlice";
import { notificationReducers } from "./NotificatinSlice";
import CommentsSlice from "./CommentsSlice";
import { filtersReducers } from "./FiltersSlice";

const store = configureStore({
  reducer: {
    music: musicReducers,
    notification: notificationReducers,
    favoriteMusics: favoriteMusicsReducers,
    recentMusics: recentMusicsReducers,
    comments: CommentsSlice,
    filters: filtersReducers,
  },
});

export default store;
