/** @jsxImportSource @emotion/react */
import {
  forwardRef,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import useHoverDebounce from "../../core/hooks/useHoverDebounce";
import { useTheme } from "../../core/theme/themeProvider";
import Portal from "../Portal";
import getTooltipsCss, { classNames } from "./getTooltipsCss";

export default function Tooltips({
  children,
  content,
  waiting = true,
}: TooltipsProps) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isHovered, setHovered] = useState<boolean>(false);
  const [clientRect, setClientRect] = useState<{
    left: number;
    top: number;
  }>({
    left: 0,
    top: 0,
  });
  const rootRefs = useRef<any>(null);
  const containerRef = useRef<any>(null);

  const onFadeOut = () => {
    setVisible(false);
    onClearTimeout();
  };

  const onFadeIn = () => {
    setHovered(true);
    setVisible(true);
  };

  const [setDebounceEvent, onClearTimeout] = useHoverDebounce(
    400,
    onFadeIn,
    waiting
  );

  const onRemove = () => {
    if (!isVisible) setHovered(false);
  };

  useLayoutEffect(() => {
    if (containerRef.current !== null) {
      const rootElement = rootRefs.current.getBoundingClientRect();
      const elementContainer = containerRef.current.getBoundingClientRect();
      setClientRect({
        left: rootElement.left + rootElement.width / 2,
        top: rootElement.top - elementContainer.height,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, isVisible]);

  return (
    <div
      ref={rootRefs}
      onMouseEnter={setDebounceEvent}
      onMouseLeave={onFadeOut}
    >
      {children}
      <Portal render={isHovered} background="blank">
        <TooltipsComponent
          ref={containerRef}
          isVisible={isVisible}
          clientRect={clientRect}
          content={content}
          onRemove={onRemove}
        />
      </Portal>
    </div>
  );
}
const TooltipsComponent = forwardRef<
  HTMLDivElement,
  {
    clientRect: {
      left: number;
      top: number;
    };
    isVisible: boolean;
    content: ReactNode;
    onRemove: React.TransitionEventHandler<HTMLDivElement>;
  }
>(function (props, ref) {
  const { clientRect, isVisible, content, onRemove } = props;
  const theme = useTheme();
  const isMounting = useRef<boolean>(false);
  const scopeTooltipsRootCSS = getTooltipsCss(theme, {
    mounting: isMounting.current,
    isVisible: isVisible,
    left: clientRect.left,
    top: clientRect.top,
  });

  useLayoutEffect(() => {
    isMounting.current = true;
  }, []);

  return (
    <div className={[classNames.root].join(" ")} css={scopeTooltipsRootCSS}>
      <div
        className={classNames.tooltipsBridge}
        onTransitionEnd={onRemove}
        ref={ref}
      >
        <div
          className={[
            classNames.tooltipsContent,
            isVisible && classNames.tooltipsContentVisible,
          ].join(" ")}
        >
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
});

export type TooltipsProps = {
  children: ReactNode;
  content: ReactNode;
  waiting?: boolean;
};

TooltipsComponent.displayName = "TooltipsComponent";
