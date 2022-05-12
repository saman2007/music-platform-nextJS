import { createSlice } from "@reduxjs/toolkit";

const MusicSlice = createSlice({
  name: "music",
  initialState: {
    musicEl: typeof Audio !== "undefined" && new Audio(),
    currentMusic: null,
    duration: null,
    isPlaying: false,
    currentTime: 0,
    isDragging: false,
    isMuted: false,
    currentVolume: 1,
  },
  reducers: {
    //to set the music duration
    setDuration(state, action) {
      state.duration = action.payload;
    },
    //to set is dragging state true or fals
    setIsDragging(state, action) {
      state.isDragging = action.payload;
    },
    //to initialize a music
    initMusic(state, action) {
      state.musicEl.src = action.payload.link;
      state.currentMusic = action.payload;
      state.musicEl.play();
      state.isPlaying = true;
    },
    //to play a music
    playMusic(state) {
      state.musicEl.play();
      state.isPlaying = true;
    },
    //to pause a music
    pauseMusic(state) {
      state.musicEl.pause();
      state.isPlaying = false;
    },
    //to decrease the music current time
    decreaseMusicTime(state, action) {
      state.musicEl.currentTime -= action.payload;
      state.currentTime -= action.payload;
    },
    //to increase the music current time
    increaseMusicTime(state, action) {
      state.musicEl.currentTime += action.payload;
      state.currentTime += action.payload;
    },
    //to mute music
    muteMusic(state) {
      state.musicEl.muted = true;
      state.isMuted = true;
    },
    //to unmute music
    unmuteMusic(state) {
      state.musicEl.muted = false;
      state.isMuted = false;
    },
    //to set music volume
    setVolume(state, action) {
      state.musicEl.volume = action.payload;
      state.currentVolume = action.payload;
    },
    //to update current time state
    setMusicTime(state) {
      state.currentTime = state.musicEl.currentTime;
    },
    //to add onloadedmetadata, ontimeupdate and onended event to music
    addListeners(state, action) {
      state.musicEl.onloadedmetadata = action.payload.onloadedmetadata;
      state.musicEl.ontimeupdate = action.payload.ontimeupdate;
      state.musicEl.onended = action.payload.onended;
    },
    //to update both music current time state and playing music
    updateMusicTime(state, action) {
      state.musicEl.currentTime = action.payload;
      state.currentTime = action.payload;
    },
  },
});

export const MusicReducers = MusicSlice.reducer;
export default MusicSlice.actions;
