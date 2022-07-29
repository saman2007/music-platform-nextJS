const Reply = ({ children, infos }) => {
  return (
    <div className="w-[99%] group border dark:border-[#2d2d2d] border-[#1db854] border-solid rounded-[10px] mb-[10px]">
      {infos && (
        <div className="overflow-hidden flex flex-col rounded-[15px] p-[5px] h-fit max-h-[200px]">
          <div className="overflow-hidden">
            <p className="text-[14px] text-black dark:text-[#828282] mb-[8px] text-ellipsis overflow-hidden whitespace-nowrap">
              replied to: {infos.username}
            </p>
          </div>

          <p className="text-[16px] text-black dark:text-white overflow-hidden max-h-[200px] break-all">
            {infos.text}
          </p>
        </div>
      )}
      {children}
    </div>
  );
};

export default Reply;
