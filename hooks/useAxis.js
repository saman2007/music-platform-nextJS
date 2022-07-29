import React, { useEffect, useRef, useState } from "react";

//a hook to return the offset of an element when user clicked or hover that element
const useAxis = (children, events) => {
  const childRef = useRef();
  const [offset, setOffset] = useState({
    x: "",
    y: "",
  });

  //to filter some events(like onClick and onMouseEnter)
  Object.keys(events).forEach((event) => {
    if (event === "onClick" || event === "onMouseEnter" || event === "onFocus") {
      let eventHandler;
      let callBack = events[event];
      eventHandler = (e) => {
        //set the new offset
        setOffset({
          x: e.currentTarget.offsetLeft,
          y: e.currentTarget.offsetTop,
        });
        // stop the propagation of the event
        e.stopPropagation();
        callBack();
      };
      events[event] = eventHandler;
    } else return;
  });

  //setting updated mouse enter and leave event for the components children
  const childrens = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...events,
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

  return { childrens, offset, childRef };
};

export default useAxis;
