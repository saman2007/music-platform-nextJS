import Header from "../components/Header/Header";
import MusicActionsBar from "../components/MusicActionsBottomBar/MusicActionsBar";
import NavBar from "../components/Navigation/NavBar";
import { Provider } from "react-redux";
import store from "../store/ReduxStore";
import { createClient } from "@supabase/supabase-js";
import "../index.css";
import Notification from "../components/notification/Notification";
import ContextProvider from "../store/context";
import Router from "next/router";
import nprogress from "nprogress";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NEXT_PUBLIC_API_KEY
);

Router.events.on("routeChangeStart", nprogress.start);
Router.events.on("routeChangeError", nprogress.done);
Router.events.on("routeChangeComplete", nprogress.done);

function MyApp({ Component, pageProps, genres }) {
  return (
    <ContextProvider>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <Provider store={store}>
        <Notification />
        <div
          className={`relative w-full h-full overflow-hidden select-none bg-[#f8f9fa] dark:bg-black grid grid-cols-[70px,repeat(11,1fr)] grid-rows-[repeat(11,1fr),65px]`}
        >
          <Header genres={genres} />
          <NavBar />
          <MusicActionsBar />
          <Component {...pageProps} />
        </div>
      </Provider>
    </ContextProvider>
  );
}

MyApp.getInitialProps = async () => {
  let { data: genres, error } = await supabase.from("genres").select("*");

  return { genres };
};

export default MyApp;
