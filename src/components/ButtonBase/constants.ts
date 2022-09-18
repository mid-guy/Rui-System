
export const types = { button: "button", submit: "submit" };

export const sizes = {
  sm: `
    min-width: 64px;
  `,
  md: `
    min-width: 138px;
  `,
  lg: `
    min-width: 238px;
  `,
};

export const animationframes = {
  ripple: `
    span {
      position: absolute;
      background: white;
      transform: translate(-50%,-50%);
      border-radius: 50%;
      animation: ripples 800ms linear;
      transition-duration: 1000ms;
    }
    @keyframes ripples {
      0% {
        width: 0px;
        height: 0px;
        opacity: 0.25;
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
      }
    }
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  `,
  scale: `
    label {
      transition-duration: 150ms;
    }
    &:active > label {
      transform: scale(0.9);
    }
  `
}

export const variants = {
  container: `
    color: #fff;
  `,
  outlined: `
    color: rgb(25, 118, 210);
    border: 1px solid rgba(25, 118, 210, 0.5);
    background: none;
  `,
  text: `
    background: none;
  `,
};

export const backgrounds = {
  primary: `
    background-color: rgb(25, 118, 210);
  `,
  secondary: `
    background-color: rgb(156, 39, 176);
  `,
  ternary: `
    background-color: rgb(211, 47, 47);
  `,
};
