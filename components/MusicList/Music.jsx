import { useDispatch, useSelector } from "react-redux";
import recentMusicsActions from "../../store/RecentMusicsSlice";

const Music = (props) => {
  const currentMusic = useSelector((store) => store.music.currentMusic);
  const dispatch = useDispatch();
  return (
    <div
      className={`rounded-[10px] cursor-pointer p-[5px] flex w-full`}
      onClick={() => {
        props.onClickHandler();
        if (JSON.stringify(props.music) !== JSON.stringify(currentMusic)) {
          dispatch(recentMusicsActions.addToLS(props.music));
        }
      }}
    >
      {props.children}
    </div>
  );
};

export default Music;
