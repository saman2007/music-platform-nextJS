const SearchedFor = ({ text }) => {
  return (
    <p className="text-[16px] mb-[15px] text-ellipsis overflow-hidden whitespace-nowrap text-white">
      searching for: "{text}"
    </p>
  );
};

export default SearchedFor;
