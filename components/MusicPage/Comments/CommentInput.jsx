import React from "react";

const CommentInput = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="w-full bg-transparent ml-[5px] text-[#d9d9d9] flex-grow h-full outline-none border border-[#2d2d2d] border-solid rounded-[10px] p-[2px]"
    />
  );
});

export default CommentInput;
