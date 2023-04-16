import {
  ReactNode,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import InputBase from "../InputBase/InputBase";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import Portal from "../Portal";
import PopoverVer2 from "../PopoverVer2/PopoverVer2";
import Span from "../../demo/Span";

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
  const optionsContainerRef = useRef<HTMLDivElement>(null);
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

  function getBoundingRefRect(ref: { current: HTMLDivElement }) {
    const client = ref.current.getBoundingClientRect();
    setPopoverRect((prev: any) => ({
      ...prev,
      height: client.height,
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
        <PopoverVer2 popoverRect={popoverRect} isVisible={isFocused}>
          <OptionsStack
            ref={optionsContainerRef}
            getBoundingRefRect={getBoundingRefRect}
          >
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
          </OptionsStack>
        </PopoverVer2>
      </Portal>
    </div>
  );
});

const OptionsStack = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    getBoundingRefRect: Function;
  }
>(function (props, ref) {
  useLayoutEffect(() => {
    props.getBoundingRefRect(ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div ref={ref} className="RuiPopoverOverflowContent">
      {props.children}
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
