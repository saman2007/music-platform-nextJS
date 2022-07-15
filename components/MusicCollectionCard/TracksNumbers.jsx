//a component to return collections tacks number
const TrackNumbers = (props) => {
  const { number } = props;

  return <p className="text-[14px] text-white p-[10px] z-[2]">{number} tracks</p>;
};

export default TrackNumbers;
