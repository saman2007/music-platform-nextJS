//tooltip component
const TooltipUi = (props) => {
  const { text, offset, showTooltip } = props;

  //if showTooltip is true, it means that the tooltip should be displayed else it should be hide
  const shouldVisible = showTooltip
    ? "opacity-100 visible"
    : "opacity-0 invisible";

  return (
    <span
      className={`absolute ${shouldVisible} z-10 text-white transition-all duration-300 min-w-[100px] bg-[#161616] text-center rounded-[5px] px-[7px] py-[5px] after:content-[''] after:absolute after:mt-[-5px] after:top-2/4 after:right-full after:border-[5px] after:border-solid after:border-[transparent_#212121_transparent_transparent]`}
      style={{ left: `${offset.x + 30}px`, top: `${offset.y - 5}px` }}
    >
      {text}
    </span>
  );
};

export default TooltipUi;
