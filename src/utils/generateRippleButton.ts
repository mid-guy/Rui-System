export function generateRippleButton(e: any) {
    const clientRect = e.nativeEvent;
    const x = clientRect.offsetX;
    const y = clientRect.offsetY;
    const ripple = document.createElement("span");
    e.target.appendChild(ripple);
    ripple.onanimationend = () => {
        ripple.remove();
    };
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
}