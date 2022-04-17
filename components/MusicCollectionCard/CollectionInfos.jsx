//a component to returns collection title and description
const CollectionInfos = (props) => {
  const { title, description } = props;

  return (
    <div className="flex-grow w-full overflow-hidden ">
      <h2 className="text-[16px] w-full text-white text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </h2>
      <p className="text-[15px] w-full text-[#bdb7ff] text-ellipsis whitespace-nowrap overflow-hidden">
        {description}
      </p>
    </div>
  );
};

export default CollectionInfos;
