/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
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
import { ThemeProps } from "../../core/theme/themeProvider";
import { generateCollapseClassNames, getCollapseCss } from "./getCollapseCss";

const Collapse = forwardRef<
  HTMLDivElement,
  { children: ReactNode; root?: boolean }
>(function (props, ref) {
  const { children, root = false, ...rest } = props;
  const innerTheme = useTheme() as ThemeProps;
  const { method } = useScopeContext({ root: root });
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
    height: rectQueue.height,
  });
  const scopeCollapseClasses = generateCollapseClassNames({
    root: true,
    mounted: isMounted.current,
  });
  function getBoundingRefRect(
    ref: RefObject<HTMLDivElement>,
    nestedHeight: number = 0
  ) {
    if (ref.current !== null) {
      const client = ref.current.getBoundingClientRect();
      console.log("render");
      setRectQueue((prev: any) => ({
        ...prev,
        height: client.height + nestedHeight,
      }));
      return;
    }
    return;
  }

  useLayoutEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <div
      ref={ref}
      {...rest}
      style={{
        width: 150,
      }}
    >
      <div
        style={{
          width: 150,
          background: "red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <button
          onClick={() => {
            setOpen(!isOpen);
            method &&
              method.forceUpdateRect &&
              method.forceUpdateRect(
                isOpen ? -rectQueue.height : rectQueue.height
              );
          }}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <div className={scopeCollapseClasses.join(" ")} css={scopeCollapseCSS}>
        <Queue
          getBoundingRefRect={getBoundingRefRect}
          ref={queueRef}
          isOpen={isOpen}
        >
          <ContextAPI
            method={{
              forceUpdateRect: (prev: any) =>
                getBoundingRefRect(queueRef, prev),
            }}
          >
            {children}
          </ContextAPI>
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

const AsyncLoadingContext = createContext<any>(null);

export const useScopeContext = ({ root = false }: { root: boolean }) => {
  const context = useContext(AsyncLoadingContext);
  if (root) {
    return {};
  }
  if (context === null) {
    throw Error("Async loading context has not been Provider");
  }
  return context;
};

// const WrapLoader = ({ children }: any) => {
//   const { isAsyncLoading } = useAsyncLoadingContext();
//   // loading...
//   if (isAsyncLoading) {
//     return <div>Loading</div>;
//   }
//   // not-loading!!!
//   return children;
// };

const ContextAPI = ({ children, method }: any) => {
  const value = {
    method,
  };

  return (
    <AsyncLoadingContext.Provider value={value}>
      {children}
    </AsyncLoadingContext.Provider>
  );
};
Queue.displayName = "Queue";
Collapse.displayName = "Collapse";

export default Collapse;
