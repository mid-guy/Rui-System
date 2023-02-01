import { forwardRef, ReactNode } from "react";

const Label = forwardRef<
  HTMLDivElement,
  { children: ReactNode; root?: boolean }
>(function (props, ref) {
  return <div>{props.children}</div>;
});

Label.displayName = "Label";

export default Label;
