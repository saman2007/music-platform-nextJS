import { RefreshIcon, ReplyIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { commentsActions, sendComment } from "../../../store/CommentsSlice";
import CommentProfile from "./CommentProfile";
import Reply from "./Reply";

const Comment = ({
  text,
  date,
  username,
  type,
  repliedInfos,
  comment,
  index,
}) => {
  const dispatch = useDispatch();

  //a function to reply
  const reply = () => {
    //move user to the first of the page
    document
      .querySelector(".content-container")
      .scrollTo({ top: 0, behavior: "smooth" });

    //set the comment as the current comment replying to
    dispatch(commentsActions.setReplyingTo(comment));
  };

  //a function to send again a failed comment
  const sendAgainComment = () => {
    dispatch(
      sendComment(
        {
          ...comment,
          date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
        },
        "TRY_AGAIN",
        index
      )
    );
  };

  return (
    <Reply infos={repliedInfos}>
      <div className="flex relative items-center gap-x-[5px] text-white bg-[#1a1a1a] rounded-[10px] w-full p-[5px]">
        {type === "sending" && (
          <div className="absolute w-full h-full rounded-[10px] flex justify-center items-center bg-[#ffffff0d] backdrop-blur border-[#ffffff2e] border-solid border z-[10] left-0">
            <p className="text-white text-[18px]">sending...</p>
          </div>
        )}
        <div className="relative max-h-[50px] min-h-[50px] max-w-[50px] min-w-[50px] rounded-[10px]">
          <CommentProfile />
        </div>
        <div className="flex-grow h-full">
          <div className="flex justify-between text-[14px] text-[#828282] mb-[10px]">
            <div className="overflow-hidden"><p className="text-ellipsis overflow-hidden whitespace-nowrap">{username}</p></div>
            <p>{date}</p>
          </div>
          <div className="flex justify-between">
            <p className="flex-grow break-all">{text}</p>
            {type === "failed" && (
              <div className="flex gap-x-[5px]">
                <p className="text-[14px] text-red-600">error, try again.</p>
                <RefreshIcon
                  onClick={sendAgainComment}
                  className="text-white cursor-pointer min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px]"
                />
              </div>
            )}
            {type !== "failed" && (
              <ReplyIcon
                onClick={reply}
                className="text-white sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px]"
              />
            )}
          </div>
        </div>
      </div>
    </Reply>
  );
};

export default Comment;
