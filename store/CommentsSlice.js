import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../pages/_app";
import notificatinActions from "./NotificatinSlice";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    currentReplyingComment: null,
  },
  reducers: {
    //a function to add a comment
    addTypedComment: (state, actions) => {
      //if type is try again, change the type of the comment to sending
      if (actions.payload.type === "TRY_AGAIN") {
        //find the comment with specific index
        const index = state.comments.findIndex(
          (_, index) => index === actions.payload.index
        );

        //change the type of that comment
        state.comments[index].type = actions.payload.comment.type;

        //else, add the comment
      } else state.comments[actions.payload.index] = actions.payload.comment;
    },
    // a function to replace comments
    replaceComments: (state, actions) => {
      state.comments = actions.payload;
    },
    //a function to set the reply comment
    setReplyingTo: (state, actions) => {
      state.currentReplyingComment = actions.payload;
    },
    //a function to clear the comments
    clearComments: (state) => {
      state.comments = [];
    },
  },
});

//a function to get the comments from api
export const getComments = (filter) => {
  return async (dispatch) => {
    //display the loading notification
    dispatch(
      notificatinActions.setSituation({
        type: "loading",
        text: "loading comments...",
      })
    );

    //get comments with the specific filter
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .match(filter);

      //if getting comments has error, display the error notification
    if (error) {
      dispatch(
        notificatinActions.setSituation({
          type: "error",
          text: "failed to load. please try again.",
        })
      );
    } else {
      //else, display the success notification
      dispatch(
        notificatinActions.setSituation({
          type: "success",
          text: "comments loaded successfully!",
        })
      );

      //replace the comments
      dispatch(commentsSlice.actions.replaceComments(data));
    }

    //remove the displaying comment after 3 seconds
    setTimeout(dispatch.bind(this, notificatinActions.removeSituation()), 3000);
  };
};

//a function to send a comment to api
export const sendComment = (comment, type = "NONE", retryIndex, callback) => {
  return async (dispatch, store) => {
    const storedComments = store().comments.comments;
    const index = storedComments.length;

    //store new comment that make it changeable
    let newComment = { ...comment };
    //change its type to sending
    newComment.type = "sending";

    //add this comment to comments
    dispatch(
      commentsSlice.actions.addTypedComment({
        comment: newComment,
        index: retryIndex ? retryIndex : index,
        type,
      })
    );

    //create a new object that make it changeable
    newComment = { ...newComment };

    //delete its type property
    delete newComment.type;

    //add the comment to database
    const { error } = await supabase
      .from("comments")
      .insert([newComment]);

    //call the callback
    callback();

    //if the request has an error:
    if (error) {
      //create new object from comment and add its type to failed
      newComment = { ...newComment, type: "failed" };

      //add the comment to comments
      dispatch(
        commentsSlice.actions.addTypedComment({
          comment: newComment,
          index: retryIndex ? retryIndex : index,
          type,
        })
      );
    } else {
      newComment = { ...newComment, type: "success" };
      dispatch(
        commentsSlice.actions.addTypedComment({
          comment: newComment,
          index: retryIndex ? retryIndex : index,
          type,
        })
      );
    }
  };
};

export const commentsActions = commentsSlice.actions;
export default commentsSlice.reducer;
