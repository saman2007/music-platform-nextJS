import Header from "../components/Header/Header";
import MusicActionsBar from "../components/MusicActionsBottomBar/MusicActionsBar";
import NavBar from "../components/Navigation/NavBar";
import { Provider } from "react-redux";
import store from "../store/ReduxStore";
import { createClient } from "@supabase/supabase-js";
import "../index.css";
import Notification from "../components/notification/Notification";
import ContextProvider from "../store/context";
import Router, { useRouter } from "next/router";
import nprogress from "nprogress";
import Script from "next/script";
import { useEffect, useRef } from "react";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NEXT_PUBLIC_API_KEY
);

Router.events.on("routeChangeStart", nprogress.start);
Router.events.on("routeChangeError", nprogress.done);
Router.events.on("routeChangeComplete", nprogress.done);

function MyApp({ Component, pageProps, genres }) {
  const router = useRouter();
  const isFirstRender = useRef(false);

  const pageview = () => {
    if (!isFirstRender.current) {
      isFirstRender.current = true;
      return;
    }

    window.dataLayer.push({
      event: "gtm.load",
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);

    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_MEASUREMENT_ID}');
          `,
        }}
      />
      <ContextProvider>
        <Provider store={store}>
          <Notification />
          <div
            className={`relative page-container w-full h-full overflow-hidden select-none bg-[#f8f9fa] dark:bg-black grid grid-cols-[70px,repeat(11,1fr)] grid-rows-[repeat(11,1fr),65px]`}
          >
            <Header genres={genres} />
            <NavBar />
            <MusicActionsBar />
            <Component {...pageProps} />
          </div>
        </Provider>
      </ContextProvider>
    </>
  );
}

MyApp.getInitialProps = async () => {
  let { data: genres } = await supabase.from("genres").select("*");

  return { genres };
};

export default MyApp;
