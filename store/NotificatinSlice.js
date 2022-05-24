import { createSlice } from "@reduxjs/toolkit";

//a slice to manage notification
const NotificationSlice = createSlice({
  name: "notification",
  initialState: {
    situation: null,
    isRemoved: false,
  },
  reducers: {
    //to set situation of notification
    setSituation(state, action) {
      state.situation = action.payload;
      state.isRemoved = false;
    },
    //to remove the notification
    removeSituation(state) {
      if (state.situation?.type !== "loading") state.isRemoved = true;
    },
  },
});

export const NotificationReducers = NotificationSlice.reducer;
export default NotificationSlice.actions;
