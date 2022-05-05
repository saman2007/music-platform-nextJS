import OutlineHeartIcon from "@heroicons/react/outline/HeartIcon";
import SolidHeartIcon from "@heroicons/react/solid/HeartIcon";
import { useState } from "react";

const Like = (props) => {
  const { like, bar } = props;
  const [isLike, setISLike] = useState(like);

  let classes = "";
  if (bar) classes = "w-[50px] h-[50px] sm:hidden";
  else classes = "w-[25px] h-[25px]";

  return (
    <span className="flex justify-center items-center w-2/4">
      {isLike ? (
        <SolidHeartIcon
          onClick={setISLike.bind(this, false)}
          className={`text-red-600 ${classes} cursor-pointer`}
        />
      ) : (
        <OutlineHeartIcon
          onClick={setISLike.bind(this, true)}
          className={`text-red-600 ${classes} cursor-pointer`}
        />
      )}
    </span>
  );
};

export default Like;
