import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import Input from "./Input";
import notificatinActions from "../../store/NotificatinSlice";
import { supabase } from "../../pages/_app";
import { useState } from "react";

const FeedbackForm = () => {
  const nameInput = useInput((value) => value.trim().length !== 0, true);
  const emailInput = useInput(
    (value) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value),
    true
  );
  const feedbackArea = useInput((value) => value.trim().length !== 0, true);
  const dispatch = useDispatch();
  const [isSending, setIsSending] = useState(false);

  const isFormNotOk = () =>
    !nameInput.isFormValid ||
    !emailInput.isFormValid ||
    !feedbackArea.isFormValid;

  const resetForm = () => {
    nameInput.reset();
    emailInput.reset();
    feedbackArea.reset();
  };

  const sendFeedback = async (e) => {
    e.preventDefault();

    if (isFormNotOk() || isSending) return;

    setIsSending(true);
    dispatch(
      notificatinActions.setSituation({
        type: "loading",
        text: "sending your feedback...",
      })
    );

    try {
      const { error } = await supabase.from("feedbacks").insert({
        name: nameInput.value,
        email: emailInput.value,
        feedback: feedbackArea.value,
      });

      if (error) throw new Error();

      dispatch(
        notificatinActions.setSituation({
          type: "success",
          text: "your feedback sent successfuly! thanks for your feedback.",
        })
      );

      resetForm();
    } catch (error) {
      if (error)
        dispatch(
          notificatinActions.setSituation({
            type: "error",
            text: "failed to send your feedbaack. please try again.",
          })
        );
    }

    setTimeout(() => {
      dispatch(notificatinActions.removeSituation());
    }, 3000);

    setIsSending(false);
  };

  return (
    <form
      onSubmit={sendFeedback}
      className="w-[90%] sm:w-[400px] flex flex-col"
    >
      <Input
        htmlFor="name"
        label="enter your name"
        require
        placeholder="enter your name here"
        type="text"
        onChange={nameInput.onChangeHandler}
        onBlur={nameInput.onBlurHandler}
        isTouched={nameInput.isTouched}
        isInputValid={nameInput.isFormValid}
        error={"please enter your name!"}
        value={nameInput.value}
      />
      <Input
        htmlFor="email"
        label="enter your email"
        require
        placeholder="enter your email here"
        type="text"
        onChange={emailInput.onChangeHandler}
        onBlur={emailInput.onBlurHandler}
        isTouched={emailInput.isTouched}
        isInputValid={emailInput.isFormValid}
        error={"please enter your correct email!"}
        value={emailInput.value}
      />
      <Input
        htmlFor="name"
        label="enter your feedback"
        require
        placeholder="enter your feedback here"
        el="textarea"
        onChange={feedbackArea.onChangeHandler}
        onBlur={feedbackArea.onBlurHandler}
        isTouched={feedbackArea.isTouched}
        isInputValid={feedbackArea.isFormValid}
        error={"please enter your feedback!"}
        value={feedbackArea.value}
      />
      <input
        disabled={isFormNotOk() | isSending}
        type="submit"
        value="submit"
        className="text-white disabled:bg-[#2c834a] mt-[10px] cursor-pointer px-[10px] py-[5px] bg-[#1db854] hover:bg-[#179a45] rounded-[7px]"
      />
    </form>
  );
};

export default FeedbackForm;
