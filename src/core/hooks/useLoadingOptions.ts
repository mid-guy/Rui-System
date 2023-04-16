import { useState } from "react";

export default function useLoadingOptions() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const withLoadingOptions = async (callback: any) => {
    setLoading(true);
    await delay(3000);
    await callback();
    setLoading(false);
  };
  return { withLoadingOptions, isLoading };
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
