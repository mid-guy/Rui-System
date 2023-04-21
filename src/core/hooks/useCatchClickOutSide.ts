import { useLayoutEffect, useRef } from "react";

export default function useCatchClickOutSide({ callback, targetRef }: any) {
  const isMounted = useRef(false);
  const onHandleClick = (e: any) => {
    if (!isMounted.current) return (isMounted.current = true);
    if (targetRef.current && targetRef.current.contains(e.target)) return;
    callback();
    return;
  };
  useLayoutEffect(() => {
    document.addEventListener("click", onHandleClick);
    return () => {
      document.removeEventListener("click", onHandleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {};
}
