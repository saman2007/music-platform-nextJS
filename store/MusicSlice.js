import { createSlice } from "@reduxjs/toolkit";

const MusicSlice = createSlice({
  name: "music",
  initialState: {
    currentMusic: null,
    duration: null,
    isPlaying: false,
    currentTime: 0,
    isDragging: false,
    isMuted: false,
    currentVolume: 1,
  },
  reducers: {
    setCurrentMusic(state, action) {
      state.currentMusic = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    setIsDragging(state, action) {
      state.isDragging = action.payload;
    },
    setIsMuted(state, action) {
      state.isMuted = action.payload;
    },
    setCurrentVolume(state, action) {
      state.currentVolume = action.payload;
    },
  },
});

export const MusicReducers = MusicSlice.reducer;
export default MusicSlice.actions;
