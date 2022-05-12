//a component that returns the container of a music collection
const MusicCollectionContainer = (props) => {
  const { bgImg, bgColor } = props;
  let selectedBgColor = null;
  let shadow = null;

  //selecting the collection shadow and background color
  if (bgColor === "purple") {
    selectedBgColor = "bg-[#7770ff]";
    shadow = "#7770ff 0px -60px 30px -6px inset";
  } else if (bgColor === "blue") {
    selectedBgColor = "bg-[#224efe]";
    shadow = "#224efe 0px -60px 30px -6px inset";
  } else if (bgColor === "orange") {
    selectedBgColor = "bg-[#fe9c02]";
    shadow = "#fe9c02 0px -60px 30px -6px inset";
  } else if(bgColor === "light orange") {
    selectedBgColor = "bg-[#fc6833]";
    shadow = "#fc6833 0px -60px 30px -6px inset";
  }

  return (
    <div
      className={`${selectedBgColor} rounded-[20px] flex flex-col min-w-[250px] min-h-[300px] max-w-[250px] max-h-[300px] justify-between p-[10px]`}
      style={{
        backgroundImage: `url("${bgImg}")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        boxShadow: shadow,
      }}
    >
      {props.children}
    </div>
  );
};

export default MusicCollectionContainer;
