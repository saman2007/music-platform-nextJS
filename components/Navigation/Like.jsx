import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMusic,
  removeFavoriteMusic,
} from "../../store/FavoriteMusics";
import OutlineHeartIcon from "@heroicons/react/outline/HeartIcon";
import SolidHeartIcon from "@heroicons/react/solid/HeartIcon";
import useFavoriteMusicsValue from "../../hooks/useFavoriteMusicsValue";

const Like = () => {
  const { musics } = useFavoriteMusicsValue();
  const currentMusic = useSelector((store) => store.music.currentMusic);
  const [isLike, setISLike] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    /* display solid heart icon if there is a music with the music item id
    in users favorite musics, else display the outline one */
    setISLike(musics.findIndex((data) => data.id === currentMusic?.id) !== -1);
  }, [musics, currentMusic]);

  let classes = "w-[50px] h-[50px] sm:hidden";

  if (currentMusic) {
    return (
      <span className="flex justify-center items-center w-2/4">
        {isLike ? (
          <SolidHeartIcon
            onClick={() => {
              setISLike(false);
              dispatch(removeFavoriteMusic(currentMusic));
            }}
            className={`text-red-600 ${classes} cursor-pointer`}
          />
        ) : (
          <OutlineHeartIcon
            onClick={() => {
              setISLike(true);
              dispatch(addFavoriteMusic(currentMusic));
            }}
            className={`text-red-600 ${classes} cursor-pointer`}
          />
        )}
      </span>
    );
  }
};

export default Like;
