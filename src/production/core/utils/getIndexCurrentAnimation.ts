import {
  AnimationCountMapType,
  AnimationCountTypes,
} from "../../packages/ButtonBase/TouchRipple";

export const getIndexCurrentAnimation = (
  uuid: string,
  source: AnimationCountMapType
) => {
  // if (source && Array.isArray(source) && source.length === 0) {
  //   throw new Error("Memory leak!!!");
  // }
  return source.findIndex(
    (animation: AnimationCountTypes) => animation.uuid === uuid
  );
};
