import PlayIcon from "../../Icons/PlayIcon";

const Play = (props) => {
  return (
    <PlayIcon
      onClickHandler={props.onClick}
      height={"100%"}
      color={"#80da37"}
      className="play-music-button"
    />
  );
};

export default Play;
