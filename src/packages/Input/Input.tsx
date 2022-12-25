/* eslint-disable react-hooks/exhaustive-deps */
import {
  forwardRef,
  Fragment,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import debounceTyping from "../../core/utils/debounceTyping";

function Input() {
  const [isFocus, setFocus] = useState<boolean>(false);
  const [isTyping, setTyping] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [portalRect, setPortalRect] = useState({
    height: 50,
  });
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  function getBoundingRefRect(ref: { current: HTMLDivElement }) {
    const client = ref.current.getBoundingClientRect();
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
        onChange={debounceTyping((e) => {
          setTyping(false);
          setSearchValue(e.target.value);
        })}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {isFocus && (
        <PortalContainer isTyping={isTyping} portalRect={portalRect}>
          <OptionsContainer
            ref={optionsContainerRef}
            getBoundingRefRect={getBoundingRefRect}
          >
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
              } else {
                return (
                  <Fragment key={item.id}>
                    <Span>Nothing to display</Span>
                  </Fragment>
                );
              }
            })}
          </OptionsContainer>
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

const OptionsContainer = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    getBoundingRefRect: Function;
  }
>(function (props, ref) {
  useLayoutEffect(() => {
    props.getBoundingRefRect(ref);
  }, []);
  return <div ref={ref}>{props.children}</div>;
});
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
