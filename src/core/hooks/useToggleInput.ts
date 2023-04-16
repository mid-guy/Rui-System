import { useRef, useState } from "react";

const initialStateRectPopover = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

export default function useToggleInput() {
  const [popoverRect, setPopoverRect] = useState(initialStateRectPopover);
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const optionStackRef = useRef<HTMLDivElement>(null);

  function getBoundingRefRect(ref: { current: HTMLDivElement }) {
    const client = ref.current.getBoundingClientRect();
    setPopoverRect((prev: any) => ({
      ...prev,
      height: client.height,
    }));
  }

  function onUpdateRectPopover() {
    const rect = getPositionTarget(rootRef);
    setPopoverRect((prev: any) => ({
      ...prev,
      ...rect,
    }));
  }

  function onFocusInput({ e, onFocus }: { e: any; onFocus?: Function }) {
    setFocused(true);
    setVisible(true);
    onUpdateRectPopover();
    onFocus && onFocus(e);
  }

  function onRemovePopover() {
    setVisible(false);
  }

  return {
    isFocused,
    isVisible,
    rootRef,
    optionStackRef,
    popoverRect,
    onRemovePopover,
    onFocusInput,
    getBoundingRefRect,
  };
}

const getPositionTarget = (target: any) => {
  const rect = target.current.getBoundingClientRect();
  return {
    x: rect.x,
    y: rect.y + rect.height,
    width: rect.width,
  };
};
