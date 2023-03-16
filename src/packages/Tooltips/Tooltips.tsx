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
type TypeProps = {
  children: ReactNode;
  content: ReactNode;
  waiting?: boolean;
};
const Tooltips = ({ children, content, waiting = false }: TypeProps) => {
  const theme = useTheme();
  const [isVisible, setVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [clientRect, setClientRect] = useState({
    left: 0,
    top: 0,
  });
  const rootRefs = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const isMounting = useRef<boolean>(false);
  const scopeTooltipsRootCSS = getTooltipsCss(theme, {
    mounting: isMounting.current,
    isVisible: isVisible,
    left: clientRect.left,
    top: clientRect.top,
  });

  const onFadeOut = () => {
    setVisible(false);
    onClearTimeout();
  };

  const onFadeIn = () => {
    setHovered(true);
    setVisible(true);
  };

  const [setDebounceEvent, onClearTimeout] = useHoverDebounce(
    500,
    onFadeIn,
    waiting
  );

  const onRemove = () => {
    if (!isVisible) setHovered(false);
  };

  useLayoutEffect(() => {
    isMounting.current = true;
  }, []);

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
      // onMouseLeave={onFadeOut}
    >
      {children}
      <Portal render={isHovered} background="blank">
        <TooltipsComponent
          ref={containerRef}
          isVisible={isVisible}
          scopeTooltipsRootCSS={scopeTooltipsRootCSS}
          content={content}
          onRemove={onRemove}
        />
      </Portal>
    </div>
  );
};
const TooltipsComponent = forwardRef<
  HTMLDivElement,
  {
    isVisible: Boolean;
    content: ReactNode;
    onRemove: any;
    scopeTooltipsRootCSS: any;
  }
>(function (props, ref) {
  const { scopeTooltipsRootCSS, isVisible, content, onRemove } = props;
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

export default Tooltips;
