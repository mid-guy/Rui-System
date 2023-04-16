import { useRef, useState } from "react";

const initialStateRectPopover = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

export default function useToggleInput() {
  const [popoverRect, setPopoverRect] = useState<InitialStateRectPopoverTypes>(
    initialStateRectPopover
  );
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const optionStackRef = useRef<HTMLDivElement>(null);

  function onFocusInput({ e, onFocus }: { e: any; onFocus?: Function }) {
    const _rootRef = rootRef as RefHTMLDivElementType;
    setFocused(true);
    setVisible(true);
    onUpdateRectPopover({
      rootRef: _rootRef,
      setPopoverRect,
    });
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
    getBoundingRefRect: (ref: RefHTMLDivElementType) =>
      getBoundingRefRect({ ref, setPopoverRect }),
  };
}

function getBoundingRefRect({
  ref,
  setPopoverRect,
}: {
  ref: RefHTMLDivElementType;
  setPopoverRect: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
      width: number;
      height: number;
    }>
  >;
}) {
  const client = ref.current.getBoundingClientRect();
  setPopoverRect((prev: InitialStateRectPopoverTypes) => ({
    ...prev,
    height: client.height,
  }));
}

function onUpdateRectPopover({
  setPopoverRect,
  rootRef,
}: {
  setPopoverRect: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
      width: number;
      height: number;
    }>
  >;
  rootRef: RefHTMLDivElementType;
}) {
  const rect = getPositionTarget(rootRef);
  setPopoverRect((prev: InitialStateRectPopoverTypes) => ({
    ...prev,
    ...rect,
  }));
}

const getPositionTarget = (target: RefHTMLDivElementType) => {
  const rect = target.current.getBoundingClientRect();
  return {
    x: rect.x,
    y: rect.y + rect.height,
    width: rect.width,
  };
};

type RefHTMLDivElementType = { current: HTMLDivElement };
type InitialStateRectPopoverTypes = {
  x: number;
  y: number;
  width: number;
  height: number;
};
