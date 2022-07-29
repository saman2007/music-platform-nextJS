const MusicListContainer = (props) => {
  return (
    <div className="w-full flex-grow md:min-w-fit mb-[20px] max-h-[550px] min-h-fit">
      {props.title && (
        <h2 className="text-[18px] text-black dark:text-white mb-[10px]">{props.title}</h2>
      )}
      <div className="w-full h-full gap-y-[15px] rounded-[20px] overflow-y-auto bg-[#cfcfcf] dark:bg-[#0d0d0d] p-[20px] border-2 border-[#1db854] dark:border-[#1e1e1e] border-solid flex flex-col">
        {props.children}
      </div>
    </div>
  );
};

export default MusicListContainer;
