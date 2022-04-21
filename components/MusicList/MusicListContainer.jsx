const MusicListContainer = (props) => {
  return (
    <div className="max-h-[550px] gap-y-[15px] rounded-[20px] overflow-y-auto bg-[#0d0d0d] p-[20px] border-2 border-[#1e1e1e] border-solid flex min-w-[680px] max-w-[680px] flex-col">
      {props.children}
    </div>
  );
};

export default MusicListContainer;
