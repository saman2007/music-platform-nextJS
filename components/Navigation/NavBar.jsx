import { useRouter } from "next/router";
import { HomeIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Logo from "./Logo";
import { useRef, useState } from "react";
import useOutSideClick from "../../hooks/useOutSideClick";
import TooltipContainer from "../Tooltip/TooltipContainer";

//basic styles for icons
const iconsStyles = "w-[24px] h-[24px] transition duration-300 cursor-pointer";

const NavBar = () => {
  const optionsRef = useRef();
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);
  useOutSideClick(optionsRef, () => setShowOptions(false));

  return (
    <div className="h-full float-left w-[70px] flex flex-col items-center py-[15px] border-r border-solid border-r-[#101010]">
      <Logo />
      <Link href="/" passHref>
        <TooltipContainer tooltipText="home">
          <a href="/" className="mb-[15px]">
            <HomeIcon
              className={`${iconsStyles} ${
                //conditionally change the icons color (active the icon)
                router.pathname === "/"
                  ? "text-[#fafafa]"
                  : "text-[#828282] hover:text-[#fafafa]"
              }`}
            />
          </a>
        </TooltipContainer>
      </Link>

      <Link href="/history" passHref>
        <TooltipContainer tooltipText="history">
          <a href="/history" className="mb-[15px]">
            <ClockIcon
              className={`${iconsStyles} ${
                router.pathname === "/history"
                  ? "text-[#fafafa]"
                  : "text-[#828282] hover:text-[#fafafa]"
              }`}
            />
          </a>
        </TooltipContainer>
      </Link>
      <TooltipContainer tooltipText="options">
        <div
          onClick={() => {
            setShowOptions(!showOptions);
          }}
          ref={optionsRef}
        >
          <DotsHorizontalIcon
            className={`${iconsStyles} ${
              showOptions
                ? "text-[#fafafa]"
                : "text-[#828282] hover:text-[#fafafa]"
            }`}
          />
        </div>
      </TooltipContainer>
    </div>
  );
};

export default NavBar;
