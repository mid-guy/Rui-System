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
import ConditionalRender from "../ConditionalRender";
import InputBase from "../InputBase";
import { OverallInputBaseProps } from "../InputBase/InputBase";
import { classNames } from "../Popover/getPopoverCss";
import Popover from "../Popover/Popover";

const Select = forwardRef<
  HTMLInputElement,
  Omit<
    OverallInputBaseProps & {
      onChange: Function;
      onLoadOptions: (e: any) => Promise<void>;
      onCompleteChangeOptions: Function;
      isLoadingOptions?: boolean;
      isUpdatingOptions?: boolean;
    },
    "ref" | "innerTheme"
  >
>(function (props, ref) {
  const theme = useTheme() as ThemeProps;
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
  const optionsContainerRef = useRef<HTMLDivElement>(null);
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
    <div
      style={{
        position: "relative",
      }}
    >
      <InputBase
        innerTheme={theme}
        isFocused={isFocused}
        size="md"
        onFocus={(e) => onFocusInput({ e, onFocus })}
        // onBlur={(e) => onBlurInput({ e, onBlur })}
        onChange={(e) => onChangeInput({ e, onChange })}
        value={value}
        ref={ref}
        {...rest}
      />
      <ConditionalRender conditional={isVisible}>
        <Popover
          popoverRect={popoverRect}
          isVisible={isFocused}
          isLoadingOptions={isLoadingOptions}
          isUpdatingOptions={isUpdatingOptions}
          onAnimationEnd={onRemovePopover}
          onCompleteChangeOptions={onCompleteChangeOptions}
        >
          <OptionsContainer
            ref={optionsContainerRef}
            getBoundingRefRect={getBoundingRefRect}
            isPending={isTyping}
          >
            {children}
          </OptionsContainer>
        </Popover>
      </ConditionalRender>
    </div>
  );
});

const OptionsContainer = forwardRef<
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
    <div ref={ref} className={classNames.overflowContent}>
      {props.children}
    </div>
  );
});

export default Select;
