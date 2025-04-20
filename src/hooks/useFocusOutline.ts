import { useState, useEffect, useCallback, RefObject } from 'react';

export const useFocusOutline = <T extends HTMLElement>(
  ref: RefObject<T | null>
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('focusin', handleFocus);
      currentRef.addEventListener('focusout', handleBlur);
    }

    return () => {
      // const currentRef = ref.current;
      if (currentRef) {
        currentRef.removeEventListener('focusin', handleFocus);
        currentRef.removeEventListener('focusout', handleBlur);
      }
    };
  }, [ref, handleFocus, handleBlur]);

  return isFocused;
};
