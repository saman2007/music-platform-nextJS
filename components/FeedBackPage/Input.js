const Input = ({
  type,
  placeholder,
  el,
  label,
  htmlFor,
  require,
  onChange,
  onBlur,
  isTouched,
  isInputValid,
  error,
  value,
}) => {
  return (
    <div className="flex flex-col mb-[20px]">
      <label
        htmlFor={htmlFor}
        className="text-[#1db854] w-fit text-[18px] mb-[5px]"
      >
        {label}
        {require ? <sup className="text-[16px] text-red-600">*</sup> : ""}
      </label>
      {el === "textarea" ? (
        <textarea
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full outline-none border-[3px] border-solid ${
            !isTouched || isInputValid
              ? "border-[#1db854]"
              : !isInputValid && "border-red-600"
          } p-[5px] h-[130px] resize-none rounded-[7px]`}
          id={htmlFor}
          value={value}
        ></textarea>
      ) : (
        <input
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full outline-none border-[3px] border-solid ${
            !isTouched || isInputValid
              ? "border-[#1db854]"
              : !isInputValid && "border-red-600"
          } p-[5px] min-h-[40px] rounded-[7px]`}
          type={type}
          placeholder={placeholder}
          id={htmlFor}
          value={value}
        />
      )}
      {isTouched && !isInputValid ? (
        <p className="text-red-600">{error}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
