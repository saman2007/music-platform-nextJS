const Reply = ({ children, infos }) => {
  return (
    <div className="w-[99%] group border border-[#2d2d2d] border-solid rounded-[10px] mb-[10px]">
      {infos && (
        <div className="overflow-hidden flex flex-col rounded-[15px] p-[5px] h-fit max-h-[200px]">
          <div className="overflow-hidden">
            <p className="text-[14px] text-[#828282] mb-[8px] text-ellipsis overflow-hidden whitespace-nowrap">
              replied to: {infos.username}
            </p>
          </div>

          <p className="text-[16px] text-white overflow-hidden max-h-[200px] break-all">
            {infos.text}
          </p>
        </div>
      )}
      {children}
    </div>
  );
};

export default Reply;
