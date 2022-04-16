import Header from "../components/Header/Header";
import NavBar from "../components/Navigation/NavBar";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-black grid grid-cols-[80px,repeat(12,1fr)] grid-rows-[repeat(12,1fr)]">
        <Header />
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
