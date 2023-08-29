import PauseIconSolid from "../../Icons/PauseIconSolid";

const Pause = (props) => {
  return (
    <PauseIconSolid
      width="unset"
      height="100%"
      color="#80da37"
      onClickHandler={props.onClick}
      className="pause-music-button"
    />
  );
};

export default Pause;
