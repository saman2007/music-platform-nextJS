import PauseIconSolid from "../../Icons/PauseIconSolid";

const Pause = (props) => {
  return (
    <PauseIconSolid onClick={props.onClick} className="h-full fill-[#80da37]" />
  );
};

export default Pause;
