import NavBar from "../components/Navigation/NavBar";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-[100vw] h-[100vh] auto-rows-max bg-black grid grid-cols-12 grid-rows-[repeat(12,minmax(0,1fr))]">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
