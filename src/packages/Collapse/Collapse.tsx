/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import {
  forwardRef,
  Fragment,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { generateCollapseClassNames, getCollapseCss } from "./getCollapseCss";

const Collapse = forwardRef<HTMLDivElement, { children: ReactNode }>(function (
  props,
  ref
) {
  const { children, ...rest } = props;
  const innerTheme = useTheme() as ThemeProps;
  const queueRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const isMounted = useRef<boolean>(false);
  const [rectQueue, setRectQueue] = useState({
    height: 0,
  });
  const scopeCollapseCSS = getCollapseCss(innerTheme, {
    rectQueue: rectQueue,
    isOpen: isOpen,
    isMounted: isMounted.current,
  });
  const scopeCollapseClasses = generateCollapseClassNames({
    root: true,
  });
  function getBoundingRefRect(ref: { current: HTMLDivElement }) {
    const client = ref.current.getBoundingClientRect();
    setRectQueue((prev: any) => ({
      ...prev,
      height: client.height,
    }));
  }
  useLayoutEffect(() => {
    isMounted.current = true;
  }, []);
  return (
    <div ref={ref} {...rest}>
      <div style={{ width: 150, height: 50, background: "red" }}>
        <button onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <div className={scopeCollapseClasses.join(" ")} css={scopeCollapseCSS}>
        <Queue
          getBoundingRefRect={getBoundingRefRect}
          ref={queueRef}
          isOpen={isOpen}
        >
          {isOpen ? children : <Fragment />}
        </Queue>
      </div>
    </div>
  );
});

const Queue = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    getBoundingRefRect: Function;
    isOpen: boolean;
  }
>(function (props, ref) {
  useLayoutEffect(() => {
    props.getBoundingRefRect(ref);
  }, [props.isOpen]);
  return <div ref={ref}>{props.children}</div>;
});

export default Collapse;
