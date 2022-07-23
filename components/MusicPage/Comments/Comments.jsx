import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../../store/CommentsSlice";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = (props) => {
  const comments = useSelector((store) => store.comments.comments);
  const dispatch = useDispatch();
  const notificationSituation = useSelector(
    (store) => store.notification.situation
  );

  useEffect(() => {
    //get the comments from api
    dispatch(getComments({ singer: props.singer, name: props.name }));
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full min-h-[200px] rounded-[20px] mb-[10px] bg-[#0d0d0d] p-[10px]">
      <CommentForm {...props} />
      {comments.map((data, index) => (
        <Comment
          text={data.text}
          date={data.date}
          username={data.username}
          key={index}
          type={data.type}
          repliedInfos={
            data.reply_id &&
            comments.find((value) => value.id === data.reply_id)
          }
          id={data.id}
          comment={data}
          index={index}
        />
      ))}

      {notificationSituation?.type === "loading" ? (
        <p className="text-[20px] font-bold text-center text-white">
          loading comments...
        </p>
      ) : comments.length === 0 &&
        !!notificationSituation &&
        notificationSituation?.type !== "loading" &&
        notificationSituation?.type !== "error" ? (
        <p className="text-[20px] font-bold text-center text-white">
          there are no comments here. be the first that submit a comment!
        </p>
      ) : (
        notificationSituation?.type === "error" && (
          <>
            <p className="text-[20px] font-bold text-center mb-[5px] text-white">
              failed to load comments. please try again.
            </p>
            <button className="px-[10px] py-[5px] rounded-[5px] border border-solid border-green-600 bg-green-500 text-white">
              try again
            </button>
          </>
        )
      )}
    </div>
  );
};

export default Comments;
