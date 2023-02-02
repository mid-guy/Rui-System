/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, ReactNode, useLayoutEffect } from "react";
import { useLocalStateCollapseContext } from "../Collapse";

const Queue = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    getBoundingRefRect: Function;
  }
>(function (props, ref) {
  const { isOpen } = useLocalStateCollapseContext();
  useLayoutEffect(() => {
    props.getBoundingRefRect(ref);
  }, [isOpen]);
  return <div ref={ref}>{props.children}</div>;
});

Queue.displayName = "Queue";

export default Queue;
