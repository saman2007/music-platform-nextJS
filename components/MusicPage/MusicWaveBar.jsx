import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTime } from "../../helpers/helpers";
import musicSlice from "../../store/MusicSlice";

const MusicWaveBar = ({ musicLink }) => {
  const [wave, setWave] = useState(null);
  const [ready, setReady] = useState(false);
  const [isWaveReady, setIsWaveReady] = useState(false);
  const currentMusicTime = useSelector((store) => store.music.currentTime);
  const waveRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let wavesurfer;
    //only if waveRef.current and ready is truthy, run these codes
    if (waveRef.current && ready) {
      //a function to create a wavebar
      async function createWave() {
        //importing wavesurfer and on of its plugins
        const WaveSurfer = await import("wavesurfer.js");
        const WaveSurferCursorPlugin = await import(
          "wavesurfer.js/src/plugin/cursor/index"
        );

        //configuring the plugin of wavesurfer
        const wavesurferCursorPlugin = WaveSurferCursorPlugin.default.create({
          showTime: true,
          color: "#1db854",
          opacity: 1,
          drag: true,
          customShowTimeStyle: {
            "background-color": "#000",
            color: "#fff",
            padding: "2px",
            "font-size": "10px",
          },
        });

        //configuring wavesurfer
        wavesurfer = WaveSurfer.default.create({
          container: waveRef.current,
          waveColor: "#4b4b4b",
          progressColor: "#FFF",
          cursorColor: "#1db854",
          barWidth: 3,
          drag: true,
          barRadius: 3,
          cursorWidth: 1,
          barGap: 3,
          responsive: true,

          plugins: [wavesurferCursorPlugin],
        });

        //add onClick event listener to the bars of wave
        wavesurfer.drawer.on("click", (e) => {
          //getting and setting the latest time of wave bar after user clicked on the wavebar
          setTimeout(() => {
            dispatch(musicSlice.updateMusicTime(wavesurfer.getCurrentTime()));
          }, 0);
        });

        //add event listener that fires when music wave bar is ready to display
        wavesurfer.on("ready", () => {
          //initialize the time of wave bar
          wavesurfer.setCurrentTime(currentMusicTime);
          setIsWaveReady(true);
        });

        //load the music wave bar
        wavesurfer.load(musicLink);

        //save the wave obj in the state
        setWave(wavesurfer);
      }

      createWave();
    } else if (!ready) setReady(true);
  }, [ready]);

  useEffect(() => {
    if (wave) {
      //update wavebar time after each time update
      wave.setCurrentTime(currentMusicTime);
    }
  }, [currentMusicTime]);

  return (
    <div className="overflow-x-auto flex-col col-start-1 col-end-7 sm:col-end-6 row-start-3 row-end-7 p-[8px] flex justify-center items-center">
      <div ref={waveRef} className="w-full"></div>
      <div
        className={`${isWaveReady ? "flex" : "hidden"} justify-between w-full`}
      >
        <span className="p-[3px] min-w-[30px] min-h-[15px] flex justify-center items-center bg-black rounded-[10px] text-white">
          {getTime(currentMusicTime)}
        </span>
        <span className="p-[3px] min-w-[30px] min-h-[15px] flex justify-center items-center bg-black rounded-[10px] text-white">
          {getTime(wave?.backend.getDuration())}
        </span>
      </div>
      {!isWaveReady && <p className="text-white text-[20px]">loading...</p>}
    </div>
  );
};

export default MusicWaveBar;
