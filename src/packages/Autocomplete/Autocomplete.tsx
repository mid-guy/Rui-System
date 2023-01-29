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
import InputBase from "../InputBase";
import { OverallInputBaseProps } from "../InputBase/InputBase";
import { classNames as classesPopover } from "../Popover/getPopoverCss";
import Popover from "../Popover/Popover";
import Portal from "../Portal";
import { classNames as classesAutocomplete } from "./getAutoCompleteRoot";

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
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isTyping, setTyping] = useState<boolean>(false);
  const [popoverRect, setPopoverRect] = useState({
    height: 0,
  });
  const [isCompletedTyping, event, setEvent, setComplete] = useDebounce(
    value,
    500,
    isFocused
  );
  function getBoundingRefRect(ref: { current: HTMLDivElement }) {
    const client = ref.current.getBoundingClientRect();
    setPopoverRect({
      height: client.height,
    });
  }
  function onFocusInput({ e, onFocus }: { e: any; onFocus?: Function }) {
    setFocused(true);
    setVisible(true);
    onFocus && onFocus(e);
  }
  // function onBlurInput({ e, onBlur }: { e: any; onBlur?: Function }) {
  //   setFocused(false);
  //   onBlur && onBlur(e);
  // }
  function onChangeInput({ e, onChange }: { e: any; onChange?: Function }) {
    setTyping(true);
    setComplete(false);
    setEvent(e);
    onChange && onChange(e);
  }
  async function stackLoadOptions() {
    console.log("START-FETCHING");
    await onLoadOptions(event);
    console.log("COMPLETED-FETCHING");
    setTyping(false);
  }

  function onRemovePopover() {
    setVisible(false);
  }

  useLayoutEffect(() => {
    isCompletedTyping && stackLoadOptions();
  }, [isCompletedTyping]);

  return (
    <div className={classesAutocomplete.root}>
      <InputBase
        innerTheme={innerTheme}
        isFocused={isFocused}
        size="md"
        onFocus={(e) => onFocusInput({ e, onFocus })}
        // onBlur={(e) => onBlurInput({ e, onBlur })}
        onChange={(e) => onChangeInput({ e, onChange })}
        value={value}
        ref={ref}
        {...rest}
      />
      <Portal render={isVisible} blankBackDrop>
        <Popover
          popoverRect={popoverRect}
          isVisible={isFocused}
          isLoadingOptions={isLoadingOptions}
          isUpdatingOptions={isUpdatingOptions}
          onAnimationEnd={onRemovePopover}
          onCompleteChangeOptions={onCompleteChangeOptions}
        >
          <OptionsStack
            ref={optionsContainerRef}
            getBoundingRefRect={getBoundingRefRect}
            isPending={isTyping}
          >
            {children}
          </OptionsStack>
        </Popover>
      </Portal>
    </div>
  );
});

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
