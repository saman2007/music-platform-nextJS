import BellIcon from "@heroicons/react/solid/BellIcon";
import CogIcon from "@heroicons/react/solid/CogIcon";
import ShieldCheckIcon from "@heroicons/react/solid/ShieldCheckIcon";

const Actions = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-[7px] py-[4px] border-2 border-solid border-[#1f1f1f] rounded-[25px] h-full">
      <ShieldCheckIcon className="h-[25px] w-[23px] text-[#cdcdcd] cursor-pointer" />
      <CogIcon className="h-[25px] w-[23px] text-[#cdcdcd] ml-[8px] cursor-pointer" />
      <BellIcon className="h-[25px] w-[23px] text-[#cdcdcd] ml-[8px] cursor-pointer" />
    </div>
  );
};

export default Actions;
