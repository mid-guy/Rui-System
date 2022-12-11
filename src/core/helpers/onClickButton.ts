import { generateRippleButton } from "./generateRippleButton";

const onClickButton = (e: React.MouseEvent<HTMLButtonElement>, onClick?: Function, animationframes?: any) => {
  if (animationframes && animationframes === "ripple" && onClick) {
    generateRippleButton(e)
    onClick(e)
    return
  }
  else if (onClick) {
    onClick(e)
    return
  }
  return
};

export default onClickButton