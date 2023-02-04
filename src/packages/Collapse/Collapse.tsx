/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import {
  createContext,
  forwardRef,
  memo,
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
const Collapse = memo(
  forwardRef<
    HTMLDivElement,
    {
      children: ReactNode;
      labelComponent: ReactNode;
      onFetchData?: Function;
      isLoading?: boolean;
      root?: boolean;
    }
  >(function (props, ref) {
    const {
      children,
      root = false,
      labelComponent,
      onFetchData,
      isLoading,
      ...rest
    } = props;
    const innerTheme = useTheme() as ThemeProps;
    const value = useScopeContext({ root: root });
    const isMounted = useRef<boolean>(false);
    const queueRef = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isCleanChildren, setCleanChildren] = useState<boolean>(true);
    const isZeroHeight = useRef<boolean>(true);
    const [rectQueue, setRectQueue] = useState({
      height: 0,
    });
    const mountedHeightRectRef = useRef<number>(0);
    //
    const scopeCollapseCSS = getCollapseCss(innerTheme, {
      rectQueue: rectQueue,
      isOpen: isOpen,
      isMounted: isMounted.current,
      height: rectQueue.height,
    });
    //
    const scopeCollapseClasses = generateCollapseClassNames({
      root: true,
      mounted: isMounted.current,
    });
    //
    const isHasSharedMethod = value && value.forceUpdateRect;
    //
    function getBoundingRectRef(
      height: number,
      nestedHeight: number = 0,
      recursion: boolean = false
    ) {
      setRectQueue((prevRect: { height: number }) => ({
        ...prevRect,
        height: height + nestedHeight,
      }));
      isHasSharedMethod &&
        recursion &&
        value.forceUpdateRect(isOpen ? nestedHeight : -nestedHeight, recursion);
    }
    function getCurrentRectRef(ref: RefObject<HTMLDivElement>) {
      if (ref.current !== null) {
        const clientRect = ref.current.getBoundingClientRect();
        return clientRect;
      }
      return { height: 0 };
    }
    //
    async function onToggle() {
      setOpen(!isOpen);
      !isOpen && onFetchData && (await onFetchData());
      if (!isOpen) {
        setCleanChildren(false);
      }
    }

    function onForceUpdateParentRect(height: number) {
      isHasSharedMethod &&
        value.forceUpdateRect(isOpen ? height : -height, true);
    }

    function onStartTransition() {
      const { height } = getCurrentRectRef(queueRef);
      getBoundingRectRef(isOpen ? height : mountedHeightRectRef.current);
      onForceUpdateParentRect(isOpen ? height : mountedHeightRectRef.current);
      if (isOpen) {
        mountedHeightRectRef.current = height;
        isZeroHeight.current = false;
      } else {
        mountedHeightRectRef.current = 0;
        isZeroHeight.current = true;
      }
    }

    function onEndTransition() {
      !isOpen && setCleanChildren(true);
    }

    useLayoutEffect(() => {
      isMounted.current = true;
    }, []);

    useLayoutEffect(() => onStartTransition(), [isOpen, isLoading]);

    return (
      <div ref={ref} style={{ width: "100%" }} {...rest}>
        <ContextLocalStateCollapseAPI
          value={{
            onToggle,
            isOpen,
            isVisible: isOpen || (!isOpen && !isCleanChildren),
            isLoading: isLoading,
          }}
        >
          <Label theme={innerTheme}>{labelComponent}</Label>
          <div
            className={scopeCollapseClasses.join(" ")}
            css={scopeCollapseCSS}
            onTransitionEnd={onEndTransition}
          >
            <Queue ref={queueRef}>
              <ContextScopeAPI
                value={{
                  forceUpdateRect: (prevHeight: number, recursion: boolean) =>
                    getBoundingRectRef(rectQueue.height, prevHeight, recursion),
                }}
              >
                {children}
              </ContextScopeAPI>
            </Queue>
          </div>
        </ContextLocalStateCollapseAPI>
      </div>
    );
  })
);

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

// function onForceUpdateParentRect(height: number) {
//   isHasSharedMethod &&
//     value.forceUpdateRect(
//       isOpen ? -rectQueue.height : rectQueue.height,
//       true
//     );
// }
