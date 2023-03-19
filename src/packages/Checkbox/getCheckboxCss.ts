import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
export const getCheckboxCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.RuiCheckboxRoot {
    height: fit-content;
    input[type="checkbox"] {
      height: 0;
      width: 0;
    }
    input[type="checkbox"] + label {
      position: relative;
      display: flex;
      align-items: center;
      color: #9e9e9e;
      transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
    }
    input[type="checkbox"] + label > ins {
      position: absolute;
      display: block;
      bottom: 0;
      left: 2em;
      height: 0;
      width: 100%;
      overflow: hidden;
      text-decoration: none;
      transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1);
    }
    input[type="checkbox"] + label > ins > i {
      position: absolute;
      bottom: 0;
      font-style: normal;
      color: #4fc3f7;
    }
    input[type="checkbox"] + label > span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 14px;
      width: 24px;
      height: 24px;
      background: transparent;
      border: 1px solid #9e9e9e;
      border-radius: 1px;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
    }

    input[type="checkbox"] + label:hover,
    input[type="checkbox"]:focus + label {
      color: #fff;
    }
    input[type="checkbox"] + label:hover > span,
    input[type="checkbox"]:focus + label > span {
      background: rgba(255, 255, 255, 0.1);
    }
    input[type="checkbox"]:checked + label > ins {
      height: 100%;
    }

    input[type="checkbox"]:checked + label > span {
      border: 4px solid #ffeb3b;
      animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
    }
    input[type="checkbox"]:checked + label > span:before {
      content: "";
      position: absolute;
      top: 45%;
      left: 10px;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1)
        forwards;
    }
    @keyframes shrink-bounce {
      0% {
        transform: scale(1);
      }
      33% {
        transform: scale(0.85);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes checkbox-check {
      0% {
        width: 0;
        height: 0;
        border-color: #212121;
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      33% {
        width: 4px;
        height: 0;
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      100% {
        width: 4px;
        height: 10px;
        border-color: #212121;
        transform: translate3d(0, -0.5em, 0) rotate(45deg);
      }
    }
  }
`;
