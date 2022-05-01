import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import { createClient } from "@supabase/supabase-js";
import "../index.css";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NEXT_PUBLIC_API_KEY
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-black grid grid-cols-[70px,repeat(11,1fr)] grid-rows-[repeat(12,1fr)]">
        <Header />
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
