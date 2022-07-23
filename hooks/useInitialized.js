import { useSelector } from "react-redux";

const useInitialized = () => {
  const isInitialized = useSelector((state) => state.music.isInitialized);

  return isInitialized ? "row-end-[12]" : "row-end-[13]";
};

export default useInitialized;
