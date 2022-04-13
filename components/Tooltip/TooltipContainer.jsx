import React, { useEffect, useRef, useState } from "react";
import TooltipUi from "./TooltipUi";

//tooltip container component
const TooltipContainer = React.forwardRef((props, ref) => {
  const { children, tooltipText } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const childRef = useRef();
  const [offset, setOffset] = useState({
    x: "",
    y: "",
  });

  //setting mouse enter and leave event for the components children
  const childrens = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onMouseEnter: (e) => {
        //if user hovered a child, store the offset left and top of the child
        const x = e.currentTarget.offsetLeft;
        const y = e.currentTarget.offsetTop;

        //update the offset state
        setOffset(() => {
          return {
            x,
            y,
          };
        });

        //display the tooltip
        setShowTooltip(true);
      },
      onMouseLeave: () => {
        //if user moved cursor out of child, hide the tooltip
        setShowTooltip(false);
      },
      ref: childRef,
    });
  });

  //initialize the position of child component at the first render
  useEffect(() => {
    setOffset(() => {
      return {
        x: childRef.current.offsetLeft,
        y: childRef.current.offsetTop,
      };
    });
  }, []);

  return (
    <>
      {childrens}
      <TooltipUi text={tooltipText} offset={offset} showTooltip={showTooltip} />
    </>
  );
});

export default TooltipContainer;
