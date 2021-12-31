import { useEffect, useState } from 'react';

export function useDelay(ms = 1000, callback) {
  let timeoutId;
  const [hasExpired, setExpired] = useState(false);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setExpired(true);
     callback?.();
    }, ms);
    return () => clearTimeout(timeoutId);
  }, [ms, callback]);

  return hasExpired;
}
