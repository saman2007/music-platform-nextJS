import HeadPhoneIcon from "./HeadphoneIcon";

const MusicListenTimes = (props) => {
  const { times } = props;

  return (
    <span className="text-[#1db854] dark:text-white flex items-center justify-between gap-x-[5px] h-full">
      <HeadPhoneIcon />
      <span className="text-[15px]">{times}</span>
    </span>
  );
};

export default MusicListenTimes;
