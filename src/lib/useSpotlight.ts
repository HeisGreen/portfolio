import { useCallback, useRef } from 'react';

/**
 * Tracks the cursor within an element and exposes it via CSS custom
 * properties (--mx / --my). Pair with the `.spotlight` utility class.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  return { ref, onMouseMove };
}
