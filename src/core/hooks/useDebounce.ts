/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useDebounce(value: any, delay: number, isFocused: boolean) {
  const [, setDebouncedValue] = useState(value);
  const [isCompletedTyping, setCompletedTyping] = useState<boolean>(false)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      isFocused && setCompletedTyping(true)
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { isCompletedTyping, setCompletedTyping };
}

export default useDebounce;