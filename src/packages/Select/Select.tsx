import { forwardRef, useRef, useState } from "react";
import InputBase from "../InputBase/InputBase";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import Portal from "../Portal";

const initialStateRectPopover = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const Select = forwardRef<HTMLInputElement, any>(function (props, ref) {
  const { onFocus, size } = props;
  const innerTheme = useTheme() as ThemeProps;
  const [popoverRect, setPopoverRect] = useState(initialStateRectPopover);
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const target = useRef<HTMLDivElement>(null);
  function onFocusInput({ e, onFocus }: { e: any; onFocus?: Function }) {
    setFocused(true);
    setVisible(true);
    onUpdateRectPopover();
    onFocus && onFocus(e);
  }

  function onRemovePopover() {
    setVisible(false);
  }

  function onUpdateRectPopover() {
    const rect = getPositionTarget(target);
    setPopoverRect((prev: any) => ({
      ...prev,
      ...rect,
    }));
  }

  return (
    <div className="RuiSelectRoot" ref={target}>
      <InputBase
        innerTheme={innerTheme}
        isFocused={false}
        onFocus={(e) => onFocusInput({ e, onFocus })}
        onBlur={onRemovePopover}
        size={size}
        ref={ref}
      />
      <Portal render={isVisible} background="blank">
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </Portal>
    </div>
  );
});

const getPositionTarget = (target: any) => {
  const rect = target.current.getBoundingClientRect();
  return {
    x: rect.x,
    y: rect.y + rect.height,
    width: rect.width,
  };
};

export default Select;

Select.displayName = "Select";
