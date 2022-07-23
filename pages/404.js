import ErrorModal from "../components/ErrorModal/ErrorModal";

const NotFoundPage = () => {
  return <ErrorModal code={404} error={"Page not found!"} />;
};

export default NotFoundPage;
