import { useEffect } from 'react';
import ExitIntent from './tools/mountExitIntentListener';

export function useExitIntent(callback) {
  useEffect(() => {
    const removeExitIntent = ExitIntent({
      threshold: 30,
      eventThrottle: 500,
      onExitIntent: () => {
        callback();
      },
    });
    return () => {
      removeExitIntent();
    };
  }, [callback]);
}
