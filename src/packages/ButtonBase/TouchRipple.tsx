/** @jsxImportSource @emotion/react */
import { forwardRef, Fragment, useImperativeHandle, useState } from "react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { utils } from "../../core/utils/utils";
import getButtonRippleCss from "./getButtonRippleCss";
export interface TouchRippleProps {
  classesTouchRipple?: string;
  theme: ThemeProps;
}

export interface TouchRippleRefs {
  onCreateAnimation: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TouchRipple = forwardRef<TouchRippleRefs, TouchRippleProps>(function (
  props,
  ref
) {
  const { theme, ...more } = props;
  const [animationCount, setAnimationCount] = useState<AnimationCountMapType>(
    []
  );

  useImperativeHandle(ref, () => {
    return { onCreateAnimation: onCreateAnimation };
  });

  const css = getButtonRippleCss(theme);
  const onCreateAnimation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { x, y } = utils.getPositionPointer(e.nativeEvent);
    setAnimationCount((prev) => [
      ...prev,
      {
        uuid: uuid(),
        positionPointer: {
          x: x,
          y: y,
        },
      },
    ]);
  };
  const onRemoveAnimation = (uuid: string, source: AnimationCountMapType) => {
    const index = utils.getIndexCurrentAnimation(uuid, source);
    setAnimationCount((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };
  return (
    <span className="cds-ripple-root" css={css} {...more}>
      {animationCount.map((animation) => (
        <Fragment key={animation.uuid}>
          <Animation
            uuid={animation.uuid}
            positionPointer={animation.positionPointer}
            onRemoveAnimation={() =>
              onRemoveAnimation(animation.uuid, animationCount)
            }
          />
        </Fragment>
      ))}
    </span>
  );
});

const Animation = ({ uuid, positionPointer, onRemoveAnimation }: any) => (
  <span
    className="cds-animation-ripple"
    data-testid="cds-animation-ripple"
    style={{
      left: positionPointer.x,
      right: positionPointer.y,
    }}
    key={uuid}
    onAnimationEnd={onRemoveAnimation}
  />
);

function uuid() {
  let r = (Math.random() + 1).toString(36).substring(7);
  return r;
}

export type AnimationCountTypes = {
  uuid: string;
  positionPointer: {
    x: number;
    y: number;
  };
};

export type AnimationCountMapType = AnimationCountTypes[];

export default TouchRipple;
