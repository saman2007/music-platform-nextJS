import PlayIcon from "../Icons/PlayIcon";
import CollectionInfos from "./CollectionInfos";
import MusicCollectionContainer from "./MusicCollectionContainer";
import TrackNumbers from "./TracksNumbers";

//a component that returns a music collections
const MusicCollection = (props) => {
  const { bgImg, color, trackNumbers, title, description } = props;

  return (
    <MusicCollectionContainer bgImg={bgImg} bgColor={color}>
      <TrackNumbers number={trackNumbers} />
      <div className={`w-full flex gap-[8px] items-center`}>
        <PlayIcon width={"35px"} height={"35px"} color={"#80da37"} />
        <CollectionInfos title={title} description={description} />
      </div>
    </MusicCollectionContainer>
  );
};

export default MusicCollection;
