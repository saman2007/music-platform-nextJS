import Header from "../components/Header/Header";
import MusicActionsBar from "../components/MusicActionsBottomBar/MusicActionsBar";
import NavBar from "../components/Navigation/NavBar";
import { Provider } from "react-redux";
import store from "../store/ReduxStore";
import { createClient } from "@supabase/supabase-js";
import "../index.css";
import { useSelector } from "react-redux";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NEXT_PUBLIC_API_KEY
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="w-[100vw] h-[100vh] select-none bg-black grid grid-cols-[70px,repeat(11,1fr)] grid-rows-[repeat(11,1fr),65px]">
        <Header />
        <NavBar />
          <MusicActionsBar
          />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
