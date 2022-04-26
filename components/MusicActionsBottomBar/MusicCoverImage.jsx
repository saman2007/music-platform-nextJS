//a component to display cover of playing music
const MusicCoverImage = (props) => {
  const { src } = props;

  return <img className="rounded-[10px] w-[50px] h-full" src={src} />;
};

export default MusicCoverImage;
