import { createPortal } from "react-dom";
import { ReactNode } from "react";
import BackDrop from "../BackDrop";

export type PortalProps = {
  children: ReactNode;
  render: boolean;
  background?: "blank" | "filled";
};

export default function Portal(props: PortalProps) {
  if (!props.render) return null;
  const element = document.getElementById("root") as HTMLElement;
  return createPortal(
    <BackDrop background={props.background}>{props.children}</BackDrop>,
    element
  );
}
