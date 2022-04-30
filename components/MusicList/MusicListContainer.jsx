const MusicListContainer = (props) => {
  return (
    <div className="w-full md:max-w-[650px] md:min-w-fit mb-[20px] max-h-[550px] min-h-fit gap-y-[15px] rounded-[20px] overflow-y-auto bg-[#0d0d0d] p-[20px] border-2 border-[#1e1e1e] border-solid flex flex-col">
      {props.children}
    </div>
  );
};

export default MusicListContainer;
