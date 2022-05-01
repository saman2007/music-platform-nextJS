const Music = (props) => {
  return (
    <div className={`rounded-[10px] cursor-pointer p-[5px] flex w-full`} onClick={props.onClickHandler}>
      {props.children}
    </div>
  );
};

export default Music;
