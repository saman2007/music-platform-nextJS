import Like from "./Like";
import Play from "./Play";

const Actions = (props) => {
  const { isLike } = props;

  return (
    <div className="hidden sm:flex w-[75px] h-[40px] rounded-[25px] items-center border-2 border-[#171717] border-solid">
      <Like like={isLike} />
      <Play />
    </div>
  );
};

export default Actions;
