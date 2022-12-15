import { fullHEX } from "./convertFullHEX";
export function convertHEXtoRGB(hex: string, opacity?: number) {
  if (hex.length === 4) {
    return fullHEX(hex);
  }
  const r = parseInt(hex.slice(1, 3), 16).toString();
  const g = parseInt(hex.slice(3, 5), 16).toString();
  const b = parseInt(hex.slice(5, 7), 16).toString();
  return `rgb${opacity && "a"}(${r}, ${g}, ${b} ${opacity && `, ${opacity}`})`;
}
