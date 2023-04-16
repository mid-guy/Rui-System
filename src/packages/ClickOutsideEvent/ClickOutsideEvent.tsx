import { Fragment, ReactNode, RefObject, useLayoutEffect, useRef } from "react";

type ClickOutsideEventProps = {
  refs: RefObject<HTMLDivElement>;
  callback: Function;
  children: ReactNode;
};
export default function ClickOutsideEvent({
  refs,
  callback,
  children,
}: ClickOutsideEventProps) {
  const isMounted = useRef(false);
  const handleClick = (e: any) => {
    if (!isMounted.current) return (isMounted.current = true);
    if (refs.current && !refs.current.contains(e.target)) return callback();
    return;
  };

  useLayoutEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Fragment>{children}</Fragment>;
}
