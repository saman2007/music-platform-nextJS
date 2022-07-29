import { XIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { commentsActions } from "../../../store/CommentsSlice";

const Replying = ({ infos, children }) => {
  const dispatch = useDispatch();

  //a function to clear current repplying comment
  const clearReply = () => {
    dispatch(commentsActions.setReplyingTo(null));
  };

  return (
    <div className="w-full input mb-[30px] min-h-[40px] border dark:border-[#2d2d2d] border-[#1db854] border-solid rounded-[10px]">
      {infos && (
        <div className="rounded-[15px] p-[5px] h-fit max-h-[110px] overflow-hidden">
          <div className="flex w-full justify-between">
            <div className="overflow-hidden">
              <p className="text-[14px] dark:text-[#828282] text-black mb-[8px] text-ellipsis whitespace-nowrap overflow-hidden">
                replying to: {infos.username}
              </p>
            </div>
            <XIcon
              onClick={clearReply}
              className="cursor-pointer min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] dark:text-white text-black"
            />
          </div>

          <div className="overflow-hidden">
            <p className="text-[16px] text-white overflow-hidden">
              {infos.text}
            </p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Replying;
