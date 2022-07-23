import { PaperAirplaneIcon } from "@heroicons/react/solid";

const SendButton = ({ isDisable }) => {
  return (
    <button
      type="submit"
      disabled={isDisable}
      className="w-[40px] h-[40px] bg-transparent outline-none rounded-[10px] flex justify-center items-center"
    >
      <PaperAirplaneIcon className="rotate-90 w-[25px] h-[25px] text-white" />
    </button>
  );
};

export default SendButton;
