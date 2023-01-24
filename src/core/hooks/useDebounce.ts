/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useDebounce(value: any, delay: number, isFocused: boolean) {
  const [, setDebouncedValue] = useState(value);
  const [isCompletedTyping, setCompletedTyping] = useState(false)
  const [event, setEvent] = useState<any>()
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      isFocused && setCompletedTyping(true)
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [isCompletedTyping, event, setEvent, setCompletedTyping];
}

export default useDebounce;