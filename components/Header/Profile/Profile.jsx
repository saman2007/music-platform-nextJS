import ProfileImg from "../../../public/my-photo.jpg";
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon";

const Profile = () => {
  return (
    <div className="bg-[#262626] rounded-[25px] h-full flex w-[90px] max-w-[90px] min-w-[90px] justify-between items-center">
      <div className="flex justify-center items-center w-full">
        <ChevronDownIcon className="w-[20px] h-[20px] text-[#6d6d6d] cursor-pointer" />
      </div>
      <img
        src={ProfileImg.src}
        className="h-full w-2/4 min-w-[50%] max-w-[50%] rounded-full"
      />
    </div>
  );
};

export default Profile;
