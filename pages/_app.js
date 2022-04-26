import Header from "../components/Header/Header";
import MusicActionsBar from "../components/MusicActionsBottomBar/MusicActionsBar";
import NavBar from "../components/Navigation/NavBar";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-[100vw] h-[100vh] select-none bg-black grid grid-cols-[70px,repeat(11,1fr)] grid-rows-[repeat(11,1fr),65px]">
        <Header />
        <NavBar />
        <MusicActionsBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
