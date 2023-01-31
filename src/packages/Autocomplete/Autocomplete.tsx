/* eslint-disable react-hooks/exhaustive-deps */
import {
  forwardRef,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import useDebounce from "../../core/hooks/useDebounce";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import ClickOutsideEvent from "../ClickOutsideEvent";
import InputBase from "../InputBase";
import { OverallInputBaseProps } from "../InputBase/InputBase";
import { classNames as classesPopover } from "../Popover/getPopoverCss";
import Popover from "../Popover/Popover";
import Portal from "../Portal";
import { classNames as classesAutocomplete } from "./getAutoCompleteRoot";

const initialStateRectPopover = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(function (
  props,
  ref
) {
  const innerTheme = useTheme() as ThemeProps;
  const {
    onFocus,
    onBlur,
    onChange,
    onLoadOptions,
    value,
    children,
    isLoadingOptions = false,
    isUpdatingOptions = false,
    onCompleteChangeOptions,
    ...rest
  } = props;
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  const wrapperRefs = useRef<HTMLDivElement>(null);
  const [popoverRect, setPopoverRect] = useState(initialStateRectPopover);
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isTyping, setTyping] = useState<boolean>(false);
  const target = useRef<HTMLDivElement>(null);
  const { isCompletedTyping, setCompletedTyping } = useDebounce(
    value,
    500,
    isFocused
  );

  function getBoundingRefRect(ref: { current: HTMLDivElement }) {
    const client = ref.current.getBoundingClientRect();
    setPopoverRect((prev: any) => ({
      ...prev,
      height: client.height,
    }));
  }

  function onFocusInput({ e, onFocus }: { e: any; onFocus?: Function }) {
    setFocused(true);
    setVisible(true);
    withTyping(stackLoadOptions)();
    onUpdateRectPopover();
    onFocus && onFocus(e);
  }

  function onBlurInput() {
    setFocused(false);
  }

  function onChangeInput({ e, onChange }: { e: any; onChange?: Function }) {
    setTyping(true);
    setCompletedTyping(false);
    onChange && onChange(e);
  }

  function withTyping(callback: Function) {
    return () => {
      setTyping(true);
      setCompletedTyping(false);
      callback();
    };
  }

  async function stackLoadOptions() {
    await onLoadOptions(value);
    setTyping(false);
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

  useLayoutEffect(() => {
    isCompletedTyping && stackLoadOptions();
  }, [isCompletedTyping]);

  return (
    <div className={classesAutocomplete.root} ref={target}>
      <InputBase
        innerTheme={innerTheme}
        isFocused={isFocused}
        size="md"
        onFocus={(e) => onFocusInput({ e, onFocus })}
        onChange={(e) => onChangeInput({ e, onChange })}
        value={value}
        ref={ref}
        {...rest}
      />
      <Portal render={isVisible} background="blank">
        <Popover
          ref={wrapperRefs}
          popoverRect={popoverRect}
          isVisible={isFocused}
          isLoadingOptions={isLoadingOptions}
          isUpdatingOptions={isUpdatingOptions}
          onAnimationEnd={onRemovePopover}
          onCompleteChangeOptions={onCompleteChangeOptions}
        >
          <ClickOutsideEvent
            refs={[target, wrapperRefs]}
            callback={onBlurInput}
          >
            <OptionsStack
              ref={optionsContainerRef}
              getBoundingRefRect={getBoundingRefRect}
              isPending={isTyping}
            >
              {children}
            </OptionsStack>
          </ClickOutsideEvent>
        </Popover>
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

const OptionsStack = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    getBoundingRefRect: Function;
    isPending: Boolean;
  }
>(function (props, ref) {
  useLayoutEffect(() => {
    props.getBoundingRefRect(ref);
  }, [props.isPending]);
  return (
    <div ref={ref} className={classesPopover.overflowContent}>
      {props.children}
    </div>
  );
});

export type AutocompleteProps = Omit<
  OverallInputBaseProps & {
    onChange: Function;
    onLoadOptions: (e: any) => Promise<void>;
    onCompleteChangeOptions: Function;
    isLoadingOptions?: boolean;
    isUpdatingOptions?: boolean;
  },
  "ref" | "innerTheme"
>;

OptionsStack.displayName = "OptionsStack";
Autocomplete.displayName = "Autocomplete";

export default Autocomplete;
