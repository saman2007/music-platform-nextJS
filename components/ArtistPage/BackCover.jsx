const BackCover = (props) => {
  return (
    <div
      className="w-full h-[200px] px-[15px] py-[5px] rounded-[20px] bg-cover flex items-center mb-[10px]"
      style={{ backgroundImage: `url('${props.cover}')` }}
    >
      <div className="h-full w-full flex items-center">
        <img
          src={props.profile}
          className="w-[130px] h-[130px] rounded-[10px]"
        />
        <div className="flex-grow ml-[20px]">
          <h1 className="text-[25px] font-semibold leading-[30px] w-fit p-[3px] rounded-[10px] mb-[10px] bg-[#0c0c0cc4] text-white">
            {props.name}
          </h1>
          <p className="text-[19px]  bg-[#161616c4] w-fit p-[3px] rounded-[10px] text-white">
            {props.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackCover;
