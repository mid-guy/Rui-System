/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import { forwardRef, useState } from "react";
import { useFadeEffect } from "../../core-hooks/useFadeEffect";
import { Avatar } from "./Avatar";
import getTooltipsCss from "./getTooltipsCss";

const Tooltips = forwardRef(function (props: any, inputRef: any) {  
  const [hovered, setHovered] = useState(false);
  const { currentID } = props
  const [_isTransitioning, shouldBeVisible, ref] = useFadeEffect(hovered, currentID);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const theme = useTheme()
  const css = getTooltipsCss(theme, { ...props, shouldBeVisible })

  return (
    <div>
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        css={css}
      >
        <Avatar />
        {
          _isTransitioning && (
            <div 
              className="ctn-popover"
              ref={ref}
            >
              <div
                className="cte-popover"
              >
                I will appear and disappear with a fade effect!
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
})

export default Tooltips
