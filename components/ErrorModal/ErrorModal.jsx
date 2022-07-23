import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import notificationActions from "../../store/NotificatinSlice";
import Link from "next/link";
import useOutSideClick from "../../hooks/useOutSideClick";
import useCssTransition from "../../hooks/useCssTransition";

const ErrorModal = ({ error, code }) => {
  const dispatch = useDispatch();
  const modalContainerRef = useRef();
  const { situation, close } = useCssTransition(300);

  //when user clicked outside the 404 box
  useOutSideClick(modalContainerRef, close, situation === "open");

  useEffect(() => {
    //remove the displaying notification
    dispatch(notificationActions.setSituation(null));
  }, []);

  if (situation !== "close") {
    return (
      <div
        className={`absolute w-full h-full transition-all duration-300 ${
          situation === "opening"
            ? "opacity-0"
            : situation === "open"
            ? "opacity-100"
            : ""
        } ${
          situation === "closing" ? "opacity-0" : ""
        } bg-[#0000007a] flex justify-center items-center`}
      >
        <div
          ref={modalContainerRef}
          className={`bg-[#161616] absolute transition-all duration-300 w-[95%] sm:w-[500px] min-h-[300px] rounded-[15px] flex flex-col justify-around items-center ${
            situation === "opening"
              ? "mt-[1000%]"
              : situation === "open"
              ? "mt-2/4"
              : ""
          }
            ${situation === "closing" ? "mt-[1000%]" : ""}`}
        >
          <div>
            <h1 className="text-white text-[45px] font-bold text-center leading-[40px]">
              {code}
            </h1>
            <h3 className="text-white text-[20px]">{error}</h3>
          </div>
          <Link prefetch={false} href="/">
            <a className="bg-[#1db854] hover:bg-[#15863c] w-[150px] h-[30px] rounded-[5px] hover:rounded-[10px] text-white flex justify-center items-center text-[16px] transition-all duration-300">
              Go to home page
            </a>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ErrorModal;
