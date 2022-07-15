import React, { useEffect, useRef, useState } from "react";
import useAxis from "../../hooks/useAxis";
import TooltipUi from "./TooltipUi";

//tooltip container component
const TooltipContainer = React.forwardRef((props, ref) => {
  const { children, tooltipText } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const { offset, childrens } = useAxis(children, {
    onMouseEnter: () => {
      setShowTooltip(true);
    },
    onMouseLeave: () => {
      setShowTooltip(false);
    },
  });

  return (
    <>
      {childrens}
      <TooltipUi text={tooltipText} offset={offset} showTooltip={showTooltip} />
    </>
  );
});

export default TooltipContainer;
