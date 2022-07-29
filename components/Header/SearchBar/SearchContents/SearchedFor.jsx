const SearchedFor = ({ text }) => {
  return (
    <p className="text-[16px] mb-[15px] text-ellipsis overflow-hidden whitespace-nowrap dark:text-white text-black">
      searching for: "{text}"
    </p>
  );
};

export default SearchedFor;
