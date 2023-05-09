import { ReactNode, forwardRef, useLayoutEffect } from "react";
import InputBase from "../InputBase/InputBase";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import Portal from "../Portal";
import PopoverVer2 from "../PopoverVer2/PopoverVer2";
import useToggleInput from "../../core/hooks/useToggleInput";
import Span from "../../demo/Span";
import useCatchClickOutSide from "../../core/hooks/useCatchClickOutSide";

const Select = forwardRef<HTMLInputElement, any>(function (props, ref) {
  const {
    onFocus,
    size,
    children,
    isLoading,
    disabled,
    LoadingComponent = <Span>Loading</Span>,
  } = props;
  const innerTheme = useTheme() as ThemeProps;
  const {
    isFocused,
    isVisible,
    rootRef,
    optionStackRef,
    popoverRect,
    onFocusInput,
    onBlurInput,
    onRemovePopover,
    getBoundingRefRect,
  } = useToggleInput();

  useCatchClickOutSide({
    targetRef: rootRef,
    callback: onBlurInput,
  });

  return (
    <div className="RuiSelectRoot" ref={rootRef}>
      <InputBase
        readOnly
        innerTheme={innerTheme}
        isFocused={isFocused}
        onFocus={(e) => onFocusInput({ e, onFocus })}
        size={size}
        ref={ref}
      />
      <Portal render={isVisible} background="blank">
        <PopoverVer2
          popoverRect={popoverRect}
          isVisible={isFocused}
          disabled={disabled}
          onAnimationEnd={onRemovePopover}
        >
          <OptionStack
            ref={optionStackRef}
            getBoundingRefRect={getBoundingRefRect}
            isPending={isLoading}
          >
            {isLoading ? LoadingComponent : children}
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
    isPending: boolean;
  }
>(function (props, ref) {
  const { isPending, children, ...rest } = props;
  const onEventStopPropagation = (e: any) => e.stopPropagation();
  useLayoutEffect(() => {
    props.getBoundingRefRect(ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isPending]);
  return (
    <div
      ref={ref}
      className="RuiOptionStackRoot"
      onClick={onEventStopPropagation}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Select;

OptionStack.displayName = "OptionStack";
Select.displayName = "Select";
