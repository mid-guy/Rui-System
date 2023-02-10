export const getPositionPointer = (nativeEvent: {
  offsetX: number;
  offsetY: number;
}) => {
  const x = nativeEvent.offsetX;
  const y = nativeEvent.offsetY;
  return {
    x,
    y,
  };
};
