/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, ReactNode } from "react";

const Queue = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
  }
>(function (props, ref) {
  return <div ref={ref}>{props.children}</div>;
});

Queue.displayName = "Queue";

export default Queue;
