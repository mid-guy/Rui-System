import {
  animationframes,
  backgrounds,
  colors,
  outlinedTheme,
  sizes,
  variants,
} from "../constants";
import defaultTheme from "../../../core-theme/theme";

describe("sizes", () => {
  test("sm", () => {
    expect(sizes.sm(defaultTheme)).toContain(`padding: 6px 12px`);
    expect(sizes.sm(defaultTheme)).toContain(`font-size: 12px`);
    expect(sizes.sm(defaultTheme)).toContain(`font-weight: 500`);
    expect(sizes.sm(defaultTheme)).toContain(`height: 30px`);
  });

  test("md", () => {
    expect(sizes.md(defaultTheme)).toContain(`padding: 8px 16px`);
    expect(sizes.md(defaultTheme)).toContain(`font-size: 14px`);
    expect(sizes.md(defaultTheme)).toContain(`font-weight: 500`);
    expect(sizes.md(defaultTheme)).toContain(`height: 36px`);
  });

  test("lg", () => {
    expect(sizes.lg(defaultTheme)).toContain(`padding: 8px 24px`);
    expect(sizes.lg(defaultTheme)).toContain(`font-size: 16px`);
    expect(sizes.lg(defaultTheme)).toContain(`font-weight: 500`);
    expect(sizes.lg(defaultTheme)).toContain(`height: 42px`);
  });
});

describe("animationframes", () => {
  test("ripple", () => {
    expect(animationframes.ripple(defaultTheme)).toContain(
      ` position: relative`
    );
    expect(animationframes.ripple(defaultTheme)).toContain(`overflow: hidden;`);
  });
  test("scale", () => {
    expect(animationframes.scale(defaultTheme)).toContain(
      `transition-duration: 150ms ease-in`
    );
    expect(animationframes.scale(defaultTheme)).toContain(`&:active`);
    expect(animationframes.scale(defaultTheme)).toContain(
      `transform: scale(0.95)`
    );
  });
});

describe("variants", () => {
  test("container", () => {
    expect(variants.container(defaultTheme)).toContain(`
    color: #FFF;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);`);
    expect(variants.outlined(defaultTheme)).toContain(`
    background: inherit;`);
    expect(variants.text(defaultTheme)).toContain(`
    background: inherit;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    border: none;`);
  });
});

describe("colors", () => {
  test("primary", () => {
    expect(colors.primary(defaultTheme)).toContain(`
    color: #1976d2;
    &:hover {
      background: rgba(25, 118, 210 , 0.04);
    }
    .cds-ripple-root {
      background: #1976d2;
    }`);
    expect(colors.secondary(defaultTheme)).toContain(`
    color: #f50057;
    &:hover {
      background: rgba(245, 0, 87 , 0.04);
    }
    .cds-ripple-root {
      background: #f50057;
    }`);
    expect(colors.ternary(defaultTheme)).toContain(`
    color: #ff9100;
    &:hover {
      background: rgba(255, 145, 0 , 0.04);
    }
    .cds-ripple-root {
      background: #ff9100;
    }`);
  });
});

describe("backgrounds", () => {
  test("primary", () => {
    expect(backgrounds.primary(defaultTheme)).toContain(`
    background-color: #1976d2;`);
    expect(backgrounds.secondary(defaultTheme)).toContain(`
    background-color: #f50057;`);
    expect(backgrounds.ternary(defaultTheme)).toContain(`
    background-color: #ff9100;`);
  });
});

describe("outlinedTheme", () => {
  test("primary", () => {
    expect(outlinedTheme.primary(defaultTheme)).toContain(`
    border: 1px solid rgba(25, 118, 210 , 0.5);
    color: #1976d2;
    &:hover {
      border: 1px solid #1976d2;
      background: rgba(25, 118, 210 , 0.04);
    }
    .cds-ripple-root {
      background: #1976d2;
    }`);
    expect(outlinedTheme.secondary(defaultTheme)).toContain(`
    border: 1px solid #f50057;
    color: #f50057;
    &:hover {
      border: 1px solid #f50057;
      background: rgba(245, 0, 87 , 0.04);
    }
    .cds-ripple-root {
      background: #f50057;
    }`);
    expect(outlinedTheme.ternary(defaultTheme)).toContain(`
    border: 1px solid rgba(245, 0, 87 , 0.5);
    color: #ff9100;
    &:hover {
      border: 1px solid #f50057;
      background: rgba(245, 0, 87 , 0.04);
    }
    .cds-ripple-root {
      background: #f50057;
    }`);
  });
});
