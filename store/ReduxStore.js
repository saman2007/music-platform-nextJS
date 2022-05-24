import { configureStore } from "@reduxjs/toolkit";
import { MusicReducers } from "./MusicSlice";
import { NotificationReducers } from "./NotificatinSlice";

const store = configureStore({
  reducer: {
    music: MusicReducers,
    notification: NotificationReducers,
  },
});

export default store;
