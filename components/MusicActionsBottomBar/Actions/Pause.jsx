import PauseIcon from "../../Icons/PauseIcon";

//a component to display pause icon
const Pause = () => {
  return (
    <span className="flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[#383838] transition duration-300 cursor-pointer">
      <PauseIcon className="w-[30px] h-[30px] fill-white" />
    </span>
  );
};

export default Pause;
