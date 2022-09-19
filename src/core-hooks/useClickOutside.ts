/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export default function useClickOutside(elRef: any, callback: any) {
  const callbackRef = useRef<any>()
  callbackRef.current = callback

  function _onToggleOutside(e: any) {
    if (!elRef.current.contains(e.target) && callbackRef.current) {
      callbackRef.current()
    }
  }
  useEffect(() => {
    document.addEventListener('click', _onToggleOutside, true)
    return () => {
      document.removeEventListener('click', _onToggleOutside, true)
    }
  }, [callbackRef, elRef])
}
