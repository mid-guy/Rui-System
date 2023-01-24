import { useState, useRef } from "react";
export default function MomentumScrollContainer(props: any) {
  const [containerPositions, setContainerPositions] = useState({
    dx: 0,
    dy: 0,
  });
  const elementRefs = useRef<any>(null);
  function easeScroll(element: any) {
    const { scrollTop, scrollHeight } = element.current;
    console.log(scrollHeight);
    const { x, y } = calculateMomentum({
      pageXOffset: 0,
      pageYOffset: scrollTop,
    });
    console.log(x, y);
    setContainerPositions({
      dx: x,
      dy: y,
    });
  }
  return (
    <div
      onScroll={() => easeScroll(elementRefs)}
      style={{
        transform: `translate3d(-${containerPositions.dx}px, -${containerPositions.dy}px, 0px)`,
      }}
      className="main"
      ref={elementRefs}
    >
      {props.children}
    </div>
  );
}

function li(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

function calculateMomentum({ pageXOffset, pageYOffset }: any) {
  //We calculate our container position by linear interpolation method
  let dx: number = pageXOffset;
  let dy: number = pageYOffset;
  dx = li(dx, pageXOffset, 0.07);
  dy = li(dy, pageYOffset, 0.07);
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  return { x: dx, y: dy };
}
