import { css, SerializedStyles } from "@emotion/react";

const getTooltipsCss = (theme: any, props: any): SerializedStyles => css`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .ctn-popover {
        position: relative;
        opacity: 1;
    }
    .cte-popover {
        position: absolute;
        border: 1px solid #eee;
        background-color: black;
        border-radius: 6px;
        top: 0;
        left: 0;
        padding: 16px;
        min-width: 250px;
        box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.05);
        margin-left: 10px;
        ${props.shouldBeVisible ? 
            "position: relative; opacity: 1; transition-duration: 150ms; transition-timing-function: cubic-bezier(0, 0, 1, 1);" 
        : 
            "position: relative; opacity: 0; transition-duration: 150ms; transition-property: opacity; transition-timing-function: cubic-bezier(0, 0, 1, 1);" 
        } 
    }
`;

export default getTooltipsCss