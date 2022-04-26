import NextTrackIcon from "../../Icons/NextTrackIcon";

//a compoent to display next track and previous track conditionally
const NextPrevious = (props) => {
  const { kind } = props;

  if (kind === "next")
    return (
      <span className="flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[#383838] transition duration-300 cursor-pointer">
        <NextTrackIcon className="w-[30px] h-[30px] rotate-180 fill-white " />
      </span>
    );
  else if (kind === "previous")
    return (
      <span className="flex justify-center items-center w-[40px] h-[40px] rounded-full hover:bg-[#383838] transition duration-300 cursor-pointer">
        <NextTrackIcon className="w-[30px] h-[30px] fill-white" />
      </span>
    );
};

export default NextPrevious;
