export function chainClassName(prefix: string, chain?: string) {
  return `${chain} ? ${prefix}${chain} : ${prefix}`;
}
