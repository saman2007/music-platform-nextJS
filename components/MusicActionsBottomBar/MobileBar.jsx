//a function to return the percent of a number relative to another number
const getPercentOf = (number1, number2) => {
  return (number1 / number2) * 100;
};

const MobileBar = (props) => {
  const { position, maxPosition } = props;

  return (
    <div className="block sm:hidden w-full h-[3px] absolute bottom-0 left-0">
      <div
        className="h-[3px] bg-[#80da37]"
        style={{ width: getPercentOf(position, maxPosition) + "%" }}
      ></div>
    </div>
  );
};

export default MobileBar;
