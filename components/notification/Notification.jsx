import { useDispatch, useSelector } from "react-redux";
import Check from "../Icons/Check";
import Loading from "../Icons/Loading";
import notificationActions from "../../store/NotificatinSlice";
import Error from "../Icons/Error";

const Notification = () => {
  const isRemoved = useSelector((store) => store.notification.isRemoved);
  const situation = useSelector((store) => store.notification.situation);
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          //when user clicked on the notification, remove the notification
          dispatch(notificationActions.removeSituation());
        }}
        className={`transition-all duration-300 absolute min-w-[170px] max-w-[190px] min-h-[40px] dark:bg-[#1a1a1a] bg-[#888888] z-20 right-[20px] px-[5px] rounded-[10px] border-[1px] dark:border-[#323232] border-[#1db854] border-solid ${
          isRemoved || !situation ? "top-[-500px]" : ""
        } ${
          !isRemoved && situation ? "top-[50px]" : ""
        } flex justify-between items-center cursor-pointer gap-x-[3px]`}
      >
        {/* display icons base on type of situation */}
        {situation?.type === "loading" && <Loading />}
        {situation?.type === "success" && <Check />}
        {situation?.type === "error" && <Error />}
        <p className="text-white text-[15px] flex-grow">{situation?.text}</p>
      </div>
    </>
  );
};

export default Notification;
