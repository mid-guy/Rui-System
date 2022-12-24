import defaultTheme from "../../../core-theme/theme";
import getButtonCss from "../getButtonCss";

const css = getButtonCss(defaultTheme, {
  variant: "container",
  background: "primary",
  size: "md",
  animationframe: "ripple",
  fullWidth: true,
  disabled: false,
});
describe("getButtonCss", () => {
  test("variant as container", () => {
    // expect(css.styles).toContain(`
    // &.cds-button-root {
    //   display: inline-flex;
    //   -webkit-box-align: center;
    //   align-items: center;
    //   -webkit-box-pack: center;
    //   justify-content: center;
    //   user-select: none;
    //   border: none;
    //   cursor: pointer;
    //   min-width: 64px;
    //   border-radius: 0.375rem;
    //   transition: 300ms ease;
    //   box-sizing: border-box;
    //   > * {
    //     pointer-events: none;
    //   }
    // }
    // &.cds-button-Container {·····
    //   color: #FFF;
    //   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    // ;
    // }···
    //   &.cds-button-bgPrimary {·······
    //   background-color: #1976d2;
    // ;
    //   }····
    // &.cds-button-sizeMd {·····
    //   padding: 8px 16px;
    //   font-size: 14px;
    //   font-weight: 500;
    //   height: 36px;
    // ;
    // }
    // &.cds-button-animationRipple {·····
    //   position: relative;
    //   overflow: hidden;
    // ;
    // }·····
    // font-family: inherit;
    // &.cds-button-fullWidth {
    //   width: 100%;
    // }
    // &.cds-button-disabled {
    //   color: rgba(0, 0, 0, 0.38);
    //   pointer-events: none;
    //   box-shadow: none;
    //   background-color: rgba(0,0,0,0.12);
    // }·
    // &.cds-button-visible {
    //   display: none;
    // }`);
  });
});
