import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isInitialized } from "../helpers/helpers";
import recentMusicsAc from "../store/RecentMusicsSlice";

const useRecentMusicsValue = () => {
  const recentMusics = useSelector(
    (store) => store.recentMusics.recentMusics
  );
  const updateTime = useSelector((store) => store.recentMusics.updateTime);
  const freezedMusics = useMemo(
    () => recentMusics,
    [!!recentMusics, updateTime]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialized("recent_musics"))
      dispatch(recentMusicsAc.initHistoryMusics());
  }, []);

  return {
    musics: freezedMusics ? freezedMusics : [],
    isInited: !!freezedMusics,
  };
};

export default useRecentMusicsValue;
