/* eslint-disable react-hooks/exhaustive-deps */
import {
  forwardRef,
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

function Input() {
  const [value, setValue] = useState<string>("");
  const [isFocus, setFocus] = useState<boolean>(false);
  const [isTyping, setTyping] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [portalRect, setPortalRect] = useState({
    height: 50,
  });
  // const portalRef = useRef();
  const inProgressRef = useRef<any>();
  function getRef(ref: any) {
    const client = ref.current.getBoundingClientRect();
    console.log(client.height);
    setPortalRect({
      height: client.height,
    });
  }
  return (
    <div
      style={{
        width: 150,
        position: "relative",
      }}
    >
      <input
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          border: "none",
          height: 36,
        }}
        onBeforeInput={() => {
          if (!isTyping) {
            return setTyping(true);
          }
        }}
        onChange={debounce((e) => {
          console.log(e.target.value);
          setTyping(false);
          setSearchValue(e.target.value);
        })}
        onFocus={() => setFocus(true)}
        // onBlur={() => setFocus(false)}
      />
      {isFocus && (
        <PortalContainer isTyping={isTyping} portalRect={portalRect}>
          <InProgressContainer ref={inProgressRef} getRef={getRef}>
            {mockArray.map((item: any) => {
              if (searchValue !== "" && item.name.includes(searchValue)) {
                return (
                  <Fragment key={item.id}>
                    <Span>{item.name}</Span>
                  </Fragment>
                );
              } else if (searchValue === "") {
                return (
                  <Fragment key={item.id}>
                    <Span>{item.name}</Span>
                  </Fragment>
                );
              }
            })}
          </InProgressContainer>
        </PortalContainer>
      )}
    </div>
  );
}

const PortalContainer = forwardRef<any, any>(function (props, ref) {
  return (
    <div
      style={{
        width: 150,
        position: "absolute",
        background: "white",
        color: "black",
        top: `calc(100% + 2px)`,
        overflow: "hidden",
        height: props.isTyping
          ? 28
          : props.portalRect.height > 100
          ? 100
          : props.portalRect.height,
        transition: `height ${props.isTyping ? 200 : 500}ms ease-in`,
      }}
      ref={ref}
    >
      {props.isTyping ? <Span>Content</Span> : props.children}
    </div>
  );
});

const Span = ({ children }: any) => {
  return (
    <div
      style={{
        padding: "4px 8px",
        height: 20,
        fontSize: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{children}</span>
    </div>
  );
};

const InProgressContainer = forwardRef<any, any>(function (props, ref) {
  useLayoutEffect(() => {
    props.getRef(ref);
  }, []);
  return <div ref={ref}>{props.children}</div>;
});

function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  delay: number = 1000
): (...args: T) => void {
  let timer: any;
  return (...args: T) => {
    if (timer && timer !== null) clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(null, ...args);
    }, delay);
  };
}
function uuid() {
  let r = (Math.random() + 1).toString(36).substring(7);
  return r;
}

const mockArray = [
  {
    id: uuid(),
    name: "Hieu 1",
  },
  {
    id: uuid(),
    name: "Hieu 12",
  },
  {
    id: uuid(),
    name: `${uuid()}`,
  },
  {
    id: uuid(),
    name: `As ${uuid()}`,
  },
  {
    id: uuid(),
    name: "Hieu 13",
  },
  {
    id: uuid(),
    name: "Hieu 13",
  },
  {
    id: uuid(),
    name: "Hieu 13",
  },
  {
    id: uuid(),
    name: "Hieu 13",
  },
  {
    id: uuid(),
    name: `As ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Acc ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Adc ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Axs ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Asd1 ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Adc ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Axs ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Asd1 ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Adc ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Axs ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Asd1 ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Adc ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Axs ${uuid()}`,
  },
  {
    id: uuid(),
    name: `Asd1 ${uuid()}`,
  },
];
export default Input;
