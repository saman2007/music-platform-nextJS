import { createSlice } from "@reduxjs/toolkit";

//a slice to manage notification
const notificationSlice = createSlice({
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

export const notificationReducers = notificationSlice.reducer;
export default notificationSlice.actions;
