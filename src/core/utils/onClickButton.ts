import { generateRippleButton } from "./generateRippleButton";

export const onClickButton = (
  e: React.MouseEvent<HTMLButtonElement>,
  onClick?: Function,
  animationframes?: string
) => {
  if (animationframes && animationframes === "ripple" && onClick) {
    generateRippleButton(e);
    onClick(e);
    return;
  } else if (animationframes && animationframes === "ripple") {
    generateRippleButton(e);
    return;
  } else if (onClick) {
    onClick(e);
    return;
  }
  return;
};
