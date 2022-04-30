import React from "react";

//audio component
const Audio = React.forwardRef((props, ref) => {
  const { source } = props;

  return <audio className="hidden" src={source} ref={ref} />;
});

export default Audio;
