/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import {
  createContext,
  forwardRef,
  ReactNode,
  RefObject,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Queue from "./Queue/Queue";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { generateCollapseClassNames, getCollapseCss } from "./getCollapseCss";
import Label from "./Label/Label";
//
const Collapse = forwardRef<
  HTMLDivElement,
  { children: ReactNode; labelComponent: ReactNode; root?: boolean }
>(function (props, ref) {
  const { children, root = false, labelComponent, ...rest } = props;
  const innerTheme = useTheme() as ThemeProps;
  const value = useScopeContext({ root: root });
  const isMounted = useRef<boolean>(false);
  const queueRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [rectQueue, setRectQueue] = useState({
    height: 0,
  });
  const scopeCollapseCSS = getCollapseCss(innerTheme, {
    rectQueue: rectQueue,
    isOpen: isOpen,
    isMounted: isMounted.current,
    height: rectQueue.height,
  });
  const scopeCollapseClasses = generateCollapseClassNames({
    root: true,
    mounted: isMounted.current,
  });

  const isHasSharedMethod = value && value.forceUpdateRect;

  function getBoundingRefRect(
    ref: RefObject<HTMLDivElement>,
    nestedHeight: number = 0,
    recursion: boolean = false
  ) {
    if (ref.current !== null) {
      const client = ref.current.getBoundingClientRect();
      setRectQueue((prev: any) => ({
        ...prev,
        height: client.height + nestedHeight,
      }));
      if (isHasSharedMethod && recursion) {
        value.forceUpdateRect(
          !isOpen ? -nestedHeight : nestedHeight,
          recursion
        );
      }
      return;
    }
    return;
  }

  function onForceUpdateRect() {
    isHasSharedMethod &&
      value.forceUpdateRect(
        isOpen ? -rectQueue.height : rectQueue.height,
        true
      );
  }
  function onToggle() {
    setOpen(!isOpen);
    onForceUpdateRect();
  }

  useLayoutEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <div ref={ref} {...rest} style={{ width: "100%" }}>
      <ContextLocalStateCollapseAPI value={{ onToggle, isOpen }}>
        <Label theme={innerTheme}>{labelComponent}</Label>
        <div className={scopeCollapseClasses.join(" ")} css={scopeCollapseCSS}>
          <Queue
            ref={queueRef}
            isOpen={isOpen}
            getBoundingRefRect={getBoundingRefRect}
          >
            <ContextScopeAPI
              value={{
                forceUpdateRect: (prev: any, recursion: boolean) =>
                  getBoundingRefRect(queueRef, prev, recursion),
              }}
            >
              {children}
            </ContextScopeAPI>
          </Queue>
        </div>
      </ContextLocalStateCollapseAPI>
    </div>
  );
});

const AsyncLoadingContext = createContext<any>(null);
const LocalStateCollapseContext = createContext<any>(null);

export const useLocalStateCollapseContext = () => {
  const context = useContext(LocalStateCollapseContext);
  if (context === null) {
    throw Error("Local state collapse context has not been Provider");
  }
  return context;
};

export const useScopeContext = (props: { root: boolean }) => {
  const { root = false } = props;
  const context = useContext(AsyncLoadingContext);
  if (root) {
    return {};
  }
  if (context === null) {
    throw Error("Scope context has not been Provider");
  }
  return context;
};

const ContextLocalStateCollapseAPI = ({ children, value }: any) => {
  return (
    <LocalStateCollapseContext.Provider value={value}>
      {children}
    </LocalStateCollapseContext.Provider>
  );
};

const ContextScopeAPI = ({ children, value }: any) => {
  return (
    <AsyncLoadingContext.Provider value={value}>
      {children}
    </AsyncLoadingContext.Provider>
  );
};

Collapse.displayName = "Collapse";

export default Collapse;

// const WrapLoader = ({ children }: any) => {
//   const { isAsyncLoading } = useAsyncLoadingContext();
//   // loading...
//   if (isAsyncLoading) {
//     return <div>Loading</div>;
//   }
//   // not-loading!!!
//   return children;
// };
