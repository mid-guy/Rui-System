

function debounceTyping<T extends unknown[]>(
  func: (...args: T) => void,
  delay: number = 1000
): (...args: T) => void {
  let timer: any;
  return (...args: T) => {
    if (timer && timer !== null) clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(null, ...args);
    }, delay);
  };
}

export default debounceTyping