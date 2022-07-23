import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../pages/_app";
import notificatinActions from "./NotificatinSlice";

const musicSlice = createSlice({
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
    playlist: null,
    playlistId: null,
    playingMusicIndex: null,
    abortController: null,
    isInitialized: false,
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
      state.isInitialized = true;
      state.playlist = null;
      state.playlistId = null;
      state.playingMusicIndex = null;
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
      for (const key in action.payload) {
        state.musicEl[key] = action.payload[key];
      }
    },
    //to update both music current time state and playing music
    updateMusicTime(state, action) {
      state.musicEl.currentTime = action.payload;
      state.currentTime = state.musicEl.currentTime;
    },
    //to set new playlist
    setPlaylist(state, action) {
      state.playlist = action.payload.playlist;
      state.playlistId = action.payload.playlistId;
      state.musicEl.src =
        action.payload.playlist[action.payload.musicIndex].link;
      state.musicEl.play();
      state.isPlaying = true;
      state.currentMusic = action.payload.playlist[action.payload.musicIndex];
      state.playingMusicIndex = action.payload.musicIndex;
      state.isInitialized = true;
    },
    //to play next music automatically when music is done
    playNextMusicAuto(state) {
      if (!state.playlist) {
        state.isPlaying = false;
      } else {
        //if there are still other musics to play in a playlist, play next music
        if (state.playlist.length - 1 > state.playingMusicIndex) {
          state.playingMusicIndex++;
          state.musicEl.src = state.playlist[state.playingMusicIndex].link;
          state.musicEl.play();
          state.currentMusic = state.playlist[state.playingMusicIndex];
          //if the current music is the last music of playlist and its done, pause the music
        } else {
          state.musicEl.pause();
          state.isPlaying = false;
        }
      }
    },
    //to play next music manually
    playNextMusic(state) {
      if (!state.playlist) {
        state.musicEl.currentTime = 0;
        state.currentTime = 0;
      } else {
        //if the playing music is the last music of playlist, play the first music of playlist
        if (state.playlist?.length - 1 === state.playingMusicIndex)
          state.playingMusicIndex = 0;
        //else, play the next music
        else state.playingMusicIndex++;

        state.musicEl.src = state.playlist[state.playingMusicIndex].link;
        if (state.isPlaying) state.musicEl.play();
        else state.musicEl.pause();
        state.currentMusic = state.playlist[state.playingMusicIndex];
      }
    },
    //to play previous music manually
    playPreviousMusic(state) {
      if (!state.playlist) {
        state.musicEl.currentTime = 0;
        state.currentTime = 0;
      } else {
        //if the playing music is the first music of playlist, play the last music of playlist
        if (state.playingMusicIndex === 0)
          state.playingMusicIndex = state.playlist.length - 1;
        //else play the previous music
        else state.playingMusicIndex--;

        state.musicEl.src = state.playlist[state.playingMusicIndex].link;
        if (state.isPlaying) state.musicEl.play();
        else state.musicEl.pause();
        state.currentMusic = state.playlist[state.playingMusicIndex];
      }
    },
    //to abort the sending request and replace a new abort controller
    replaceNewAbortController(state) {
      if (state.abortController) state.abortController.abort();

      state.abortController = new AbortController();
    },
  },
});

//to get the clicked playlist
export const getPlaylist = (playlistId) => {
  return async (dispatch, getStore) => {
    //abort the sending request and replace a new abort controller
    dispatch(musicSlice.actions.replaceNewAbortController());

    //set the situation of notification
    dispatch(
      notificatinActions.setSituation({ type: "loading", text: "Loading..." })
    );

    //get the musics datas of the clicked playlist
    let { data: playlist, error } = await supabase
      .from("musics")
      .select("*")
      .contains("playlists", [playlistId])
      .abortSignal(getStore().music.abortController.signal);

    //if request doesnt have error, set the playlist
    if (!error) {
      dispatch(
        musicSlice.actions.setPlaylist({ playlist, musicIndex: 0, playlistId })
      );

      dispatch(
        notificatinActions.setSituation({
          type: "success",
          text: "playlist loaded!",
        })
      );
    } else if (error) {
      dispatch(
        notificatinActions.setSituation({
          type: "error",
          text: "failed to load playlist. please try again.",
        })
      );
    }

    setTimeout(() => {
      dispatch(notificatinActions.removeSituation());
    }, 3000);
  };
};

export const musicReducers = musicSlice.reducer;
export default musicSlice.actions;
