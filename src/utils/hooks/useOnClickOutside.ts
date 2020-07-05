import React from 'react';

const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | undefined>,
  handler: (event: CustomEvent) => void
): void => {
  React.useEffect(
    () => {
      const listener = (event: CustomEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };

      document.addEventListener('mousedown', listener as EventListener);
      document.addEventListener('touchstart', listener as EventListener);

      return () => {
        document.removeEventListener('mousedown', listener as EventListener);
        document.removeEventListener('touchstart', listener as EventListener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};

export default useOnClickOutside;
