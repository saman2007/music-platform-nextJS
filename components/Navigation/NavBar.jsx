import { useRouter } from "next/router";
import { HeartIcon, HomeIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Logo from "./Logo";
import TooltipContainer from "../Tooltip/TooltipContainer";
import VolumeBar from "./VolumeBar";
import { useDispatch, useSelector } from "react-redux";
import musicActions from "../../store/MusicSlice";
import Volume from "../MusicActionsBottomBar/Actions/Volume";
import Like from "./Like";
import Options from "../OptionsBar/Options";
import useCssTransition from "../../hooks/useCssTransition";

//basic styles for icons
const iconsStyles = "w-[24px] h-[24px] transition duration-300 cursor-pointer";

const NavBar = () => {
  const router = useRouter();
  const { situation, close, toggle } = useCssTransition(
    400,
    "close"
  );
  const currentVolume = useSelector((state) => state.music.currentVolume);
  const isInitialized = useSelector((state) => state.music.isInitialized);
  const dispatch = useDispatch();

  return (
    <div
      className={`h-full row-start-1 ${
        isInitialized ? "row-end-[12]" : "row-end-[13]"
      } col-start-1 col-end-1 w-[70px] flex flex-col items-center py-[15px] border-r border-solid border-r-[#889096] dark:border-r-[#101010]`}
    >
      <Logo />
      <Link href="/" passHref prefetch={false}>
        <a className="mb-[15px]">
          <TooltipContainer tooltipText="home">
            <span>
              <HomeIcon
                className={`${iconsStyles} ${
                  //conditionally change the icons color (active the icon)
                  router.pathname === "/"
                    ? "text-[#1db854] dark:text-[#fafafa]"
                    : "text-[#687076] hover:text-[#1db854] dark:text-[#828282] dark:hover:text-[#fafafa]"
                }`}
              />
            </span>
          </TooltipContainer>
        </a>
      </Link>
      <Link href="/favorite-musics" passHref prefetch={false}>
        <a className="mb-[15px]">
          <TooltipContainer tooltipText="favorite musics">
            <span>
              <HeartIcon
                className={`${iconsStyles} ${
                  //conditionally change the icons color (active the icon)
                  router.pathname === "/favorite-musics"
                  ? "text-[#1db854] dark:text-[#fafafa]"
                  : "text-[#687076] hover:text-[#1db854] dark:text-[#828282] dark:hover:text-[#fafafa]"
                }`}
              />
            </span>
          </TooltipContainer>
        </a>
      </Link>
      <Link href="/recent-musics" passHref prefetch>
        <a href="/recent-musics" className="mb-[15px]">
          <TooltipContainer tooltipText="recent">
            <span>
              <ClockIcon
                className={`${iconsStyles} ${
                  router.pathname === "/recent-musics"
                  ? "text-[#1db854] dark:text-[#fafafa]"
                  : "text-[#687076] hover:text-[#1db854] dark:text-[#828282] dark:hover:text-[#fafafa]"
                }`}
              />
            </span>
          </TooltipContainer>
        </a>
      </Link>
      <Options situation={situation} close={close} toggle={toggle}>
        <div>
          <TooltipContainer tooltipText="options">
            <div>
              <DotsHorizontalIcon
                className={`${iconsStyles} ${
                  situation === "open"
                  ? "text-[#1db854] dark:text-[#fafafa]"
                  : "text-[#687076] hover:text-[#1db854] dark:text-[#828282] dark:hover:text-[#fafafa]"
                }`}
              />
            </div>
          </TooltipContainer>
        </div>
      </Options>
      <div className="flex-grow flex flex-col justify-end items-center">
        <div className="h-[40%] mb-[10px]">
          <VolumeBar
            callBack={(percent) => {
              dispatch(musicActions.setVolume(percent / 100));
            }}
            position={currentVolume}
            maxPosition={1}
          />
        </div>
        <span className="sm:hidden">
          <Volume />
        </span>
        <Like />
      </div>
    </div>
  );
};

export default NavBar;
