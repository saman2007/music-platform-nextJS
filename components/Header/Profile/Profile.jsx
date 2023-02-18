import ProfileImg from "../../../public/my-photo.jpg";
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import useCssTransition from "../../../hooks/useCssTransition";
import BugIcon from "../../Icons/BugIcon";
import SignUpIcon from "../../Icons/SignUpIcon";
import SignInIcon from "../../Icons/SignInIcon";
import ProfileItems from "./ProfileItems/ProfileItems";
import { useRef } from "react";

const profileItems = [
  { text: "sign up", path: "/auth/sign-up/", Icon: SignUpIcon },
  { text: "sign in", path: "/auth/sign-in/", Icon: SignInIcon },
  { text: "report bugs", path: "/feedback", Icon: BugIcon },
];

const Profile = () => {
  const { situation, close, toggle } = useCssTransition(250, "close");
  const containerRef = useRef();

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onClick={toggle}
        className="bg-[#cfcfcf] dark:bg-[#262626] cursor-pointer rounded-[25px] h-full flex w-[45px] max-w-[45px] min-w-[45px] md:w-[90px] md:max-w-[90px] md:min-w-[90px] justify-between items-center"
      >
        <div className="hidden md:flex justify-center items-center w-full">
          <ChevronDownIcon className="w-[20px] h-[20px] text-[#6d6d6d]" />
        </div>
        <div className="relative h-full w-full min-w-full max-w-full md:w-2/4 md:min-w-[50%] md:max-w-[50%]">
          <Image
            src={ProfileImg.src}
            objectFit="fill"
            layout="fill"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
      <Popup
        childRef={containerRef}
        closePopup={close}
        exteraClass="origin-top right-0 duration-[250ms] rounded-[10px] w-[200px] overflow-y-auto min-h-[200px] max-h-[250px] "
        time={400}
        situation={situation}
        top={50}
        animations={{ opening: "scale-y-0", closing: "scale-y-0" }}
      >
        <ProfileItems items={profileItems} />
      </Popup>
    </div>
  );
};

export default Profile;
