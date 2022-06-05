import Header from "../components/Header/Header";
import MusicActionsBar from "../components/MusicActionsBottomBar/MusicActionsBar";
import NavBar from "../components/Navigation/NavBar";
import { Provider, useDispatch } from "react-redux";
import store from "../store/ReduxStore";
import { createClient } from "@supabase/supabase-js";
import "../index.css";
import Notification from "../components/notification/Notification";
import { useEffect } from "react";

//a function to check the local storage
function checkLS() {
  const lSDatas = localStorage.getItem("favorite_musics");
  
  //if there is no item with favorite_musics name, initialize the local storage
  if (!lSDatas) {
    localStorage.setItem("favorite_musics", JSON.stringify([]));
  }
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NEXT_PUBLIC_API_KEY
);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    checkLS();
  }, []);

  return (
    <Provider store={store}>
      <Notification />
      <div className=" relative overflow-hidden w-[100vw] h-[100vh] select-none bg-black grid grid-cols-[70px,repeat(11,1fr)] grid-rows-[repeat(11,1fr),65px]">
        <Header />
        <NavBar />
        <MusicActionsBar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
