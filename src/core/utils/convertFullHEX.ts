
export function fullHEX(hex: string) {
  let r = hex.slice(1, 2);
  let g = hex.slice(2, 3);
  let b = hex.slice(3, 4);

  r = parseInt(r + r, 16).toString();
  g = parseInt(g + g, 16).toString();
  b = parseInt(b + b, 16).toString();

  return { r, g, b };
}