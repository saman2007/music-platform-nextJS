import Head from "next/head";
import ErrorModal from "../components/ErrorModal/ErrorModal";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>PAGE NOT FOUND!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ErrorModal code={404} error={"Page not found!"} />
    </>
  );
};

export default NotFoundPage;
