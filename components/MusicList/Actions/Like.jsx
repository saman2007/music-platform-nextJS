import OutlineHeartIcon from "@heroicons/react/outline/HeartIcon";
import SolidHeartIcon from "@heroicons/react/solid/HeartIcon";
import { useState } from "react";

const Like = (props) => {
  const { like } = props;
  const [isLike, setISLike] = useState(like);

  return (
    <span className="flex justify-center items-center w-2/4">
      {isLike ? (
        <SolidHeartIcon
          onClick={setISLike.bind(this, false)}
          className="text-red-600 w-[25px] h-[25px] cursor-pointer"
        />
      ) : (
        <OutlineHeartIcon
          onClick={setISLike.bind(this, true)}
          className="text-red-600 w-[25px] h-[25px] cursor-pointer"
        />
      )}
    </span>
  );
};

export default Like;
