import { ReactNode, forwardRef, useLayoutEffect } from "react";
import InputBase from "../InputBase/InputBase";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import Portal from "../Portal";
import PopoverVer2 from "../PopoverVer2/PopoverVer2";
import Span from "../../demo/Span";
import useToggleInput from "../../core/hooks/useToggleInput";

const Select = forwardRef<HTMLInputElement, any>(function (props, ref) {
  const { onFocus, size } = props;
  const innerTheme = useTheme() as ThemeProps;
  const {
    isFocused,
    isVisible,
    rootRef,
    optionStackRef,
    popoverRect,
    onFocusInput,
    onRemovePopover,
    getBoundingRefRect,
  } = useToggleInput();
  return (
    <div className="RuiSelectRoot" ref={rootRef}>
      <InputBase
        readOnly
        innerTheme={innerTheme}
        isFocused={false}
        onFocus={(e) => onFocusInput({ e, onFocus })}
        onBlur={onRemovePopover}
        size={size}
        ref={ref}
      />
      <Portal render={isVisible} background="blank">
        <PopoverVer2 popoverRect={popoverRect} isVisible={isFocused}>
          <OptionStack
            ref={optionStackRef}
            getBoundingRefRect={getBoundingRefRect}
          >
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
            <Span>123</Span>
          </OptionStack>
        </PopoverVer2>
      </Portal>
    </div>
  );
});

const OptionStack = forwardRef<
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

export default Select;

OptionStack.displayName = "OptionStack";
Select.displayName = "Select";
