/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, ReactNode, useLayoutEffect } from "react";

const Queue = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    getBoundingRefRect: Function;
    isOpen: boolean;
  }
>(function (props, ref) {
  useLayoutEffect(() => {
    props.getBoundingRefRect(ref);
  }, [props.isOpen]);
  return <div ref={ref}>{props.children}</div>;
});

Queue.displayName = "Queue";

export default Queue;
