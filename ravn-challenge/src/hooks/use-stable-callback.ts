import { useCallback, useLayoutEffect, useRef } from 'react';

/**
 * Returns a memoized version of your function that maintains a stable reference, but
 * also can read the latest scope (props and state) of the component in which it is used.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useStableCallback<Args extends any[], T>(callback: (...args: Args) => T) {
  const callbackContainer = useRef(callback);
  useLayoutEffect(() => {
    callbackContainer.current = callback;
  });
  return useCallback((...args: Args) => callbackContainer.current(...args), [callbackContainer]);
}
