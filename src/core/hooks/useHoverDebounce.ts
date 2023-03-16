/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useEffect, useState } from "react";

const TIMEOUT = 500;

function useHoverDebounce(
  delay: number = TIMEOUT,
  callback: Function,
  waiting: boolean
) {
  const handler = useRef<any>();
  const [isHovering, setHovering] = useState(false);
  const setDebounceEvent = () => {
    setHovering(true);
  };
  const onClearTimeout = () => {
    setHovering(false);
    clearTimeout(handler.current);
  };
  useEffect(() => {
    handler.current = setTimeout(
      () => isHovering && callback(),
      waiting ? delay : 0
    );
    return () => {
      clearTimeout(handler.current);
    };
  }, [isHovering, delay]);
  return [setDebounceEvent, onClearTimeout];
}

export default useHoverDebounce;
