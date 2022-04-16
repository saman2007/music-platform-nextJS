import ProfileImg from "../../../public/my-photo.jpg";
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon";

const Profile = () => {
  return (
    <div className="bg-[#262626] rounded-[25px] h-full flex w-[45px] max-w-[45px] min-w-[45px] md:w-[90px] md:max-w-[90px] md:min-w-[90px] justify-between items-center">
      <div className="hidden md:flex justify-center items-center w-full">
        <ChevronDownIcon className="w-[20px] h-[20px] text-[#6d6d6d] cursor-pointer" />
      </div>
      <img
        src={ProfileImg.src}
        className="h-full w-full min-w-full max-w-full md:w-2/4 md:min-w-[50%] md:max-w-[50%] rounded-full"
      />
    </div>
  );
};

export default Profile;
