import { createPortal } from "react-dom";
import { ReactNode } from "react";
import BackDrop from "../BackDrop";

export type PortalProps = {
  children: ReactNode;
  render: boolean;
  blankBackDrop?: boolean;
};

export default function Portal(props: PortalProps) {
  if (!props.render) return null;
  const element = document.getElementById("root") as HTMLElement;
  return createPortal(
    <BackDrop blankBackDrop={props.blankBackDrop}>{props.children}</BackDrop>,
    element
  );
}
