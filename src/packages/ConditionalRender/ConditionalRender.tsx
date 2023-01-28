import { Fragment } from "react";

export default function ConditionalRender({
  conditional,
  fallback = <Fragment />,
  children,
}: any) {
  return conditional ? children : fallback;
}
