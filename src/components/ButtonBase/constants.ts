export const types = { button: "button", submit: "submit" };

export const sizes = {
  sm: `
    padding: 6px 12px;
    font-size: 12px;
    height: 30px;
  `,
  md: `
    padding: 8px 16px;
    font-size: 14px;
    height: 36px;
  `,
  lg: `
    padding: 8px 24px;
    font-size: 16px;
    height: 42px;
  `,
};

export const animationframes = {
  ripple: `
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  `,
  scale: `
    transition-duration: 150ms;
    &:active {
      transform: scale(0.95);
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
