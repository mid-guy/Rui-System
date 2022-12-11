
export function generateRippleButton(e: React.MouseEvent<HTMLButtonElement>) {
  const clientRect = e.nativeEvent;
  const x = clientRect.offsetX;
  const y = clientRect.offsetY;
  const ripple = document.createElement("span");
  ripple.classList.add("cds-animation-ripple");
  const childNodes = e.currentTarget.childNodes;
  const touchRippleComponent = childNodes[childNodes.length - 1];
  touchRippleComponent.appendChild(ripple);
  ripple.onanimationend = () => {
    ripple.remove();
  };
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
}