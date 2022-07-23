import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsActions, sendComment } from "../../../store/CommentsSlice";
import CommentInput from "./CommentInput";
import CommentProfile from "./CommentProfile";
import Replying from "./Replying";
import SendButton from "./SendButton";

const CommentForm = ({ singer, name }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);
  const currentReplyingComment = useSelector(
    (store) => store.comments.currentReplyingComment
  );

  //a function to send a comment
  const submitForm = (e) => {
    e.preventDefault();

    //if user entered something, send users comment
    if (inputRef.current.value.trim() !== "") {
      //disable the button
      setIsDisable(true);

      //initialize the comment object
      const comment = {
        text: inputRef.current.value,
        username: "user",
        singer,
        name,
        date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
        reply_id: currentReplyingComment?.id,
        is_reply: !!currentReplyingComment,
      };

      //clear the comment input
      inputRef.current.value = "";
      //clear the current replying comment
      dispatch(commentsActions.setReplyingTo(null));

      //a callback to enable the button
      const callBack = () => {
        setIsDisable(false);
      };

      //send the comment
      dispatch(sendComment(comment, "NONE", null, callBack));
    }
  };

  return (
    <Replying infos={currentReplyingComment}>
      <form
        onSubmit={submitForm}
        className="w-full h-[40px] rounded-[10px] flex bg-[#1a1a1a]"
      >
        <div className="relative max-h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] rounded-[10px]">
          <CommentProfile />
        </div>
        <CommentInput ref={inputRef} />
        <SendButton isDisable={isDisable} />
      </form>
    </Replying>
  );
};

export default CommentForm;
