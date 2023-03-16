export function chainClassName(prefix: string, chain?: string): string {
  if (chain) return `${prefix}${chain}`;
  return prefix;
}
