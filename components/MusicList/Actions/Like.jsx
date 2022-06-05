import OutlineHeartIcon from "@heroicons/react/outline/HeartIcon";
import SolidHeartIcon from "@heroicons/react/solid/HeartIcon";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFavoriteMusicsValue from "../../../hooks/useFavoriteMusicsValue";
import {
  addFavoriteMusic,
  removeFavoriteMusic,
} from "../../../store/FavoriteMusics";

const Like = (props) => {
  const { music } = props;
  const { musics } = useFavoriteMusicsValue();
  const [isLike, setISLike] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    /* if there is a music with id that is equal to the
    music item id, display the solid heart icon, else
    display the outline one */
    setISLike(musics.findIndex((data) => data.id === music.id) !== -1);
  }, [musics]);

  let classes = "w-[25px] h-[25px]";

  return (
    <span className="flex justify-center items-center w-2/4">
      {isLike ? (
        <SolidHeartIcon
          onClick={() => {
            //display outline icon 
            setISLike(false);
            //remove the music from users favorite musics
            dispatch(removeFavoriteMusic(music));
          }}
          className={`text-red-600 ${classes} cursor-pointer`}
        />
      ) : (
        <OutlineHeartIcon
          onClick={() => {
            //display solid heart icon
            setISLike(true);
            //add the music to users favorite musics
            dispatch(addFavoriteMusic(music));
          }}
          className={`text-red-600 ${classes} cursor-pointer`}
        />
      )}
    </span>
  );
};

export default Like;
