import NavBar from "../components/Navigation/NavBar";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-black">
        <NavBar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
