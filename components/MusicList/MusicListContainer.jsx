const MusicListContainer = (props) => {
  return (
    <div className="w-full mb-[20px] md:max-h-[550px] gap-y-[15px] rounded-[20px] overflow-y-auto bg-[#0d0d0d] p-[20px] border-2 border-[#1e1e1e] border-solid flex flex-col">
      {props.children}
    </div>
  );
};

export default MusicListContainer;
