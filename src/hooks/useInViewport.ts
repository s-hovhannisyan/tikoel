import { useCallback, useEffect, useState } from "react";

const useInViewport = (ref: React.RefObject<HTMLDivElement>) => {
  const [isInViewport, setIsInViewport] = useState<string | null | undefined>(null);


  const checkVisibility = useCallback(() => {
    
    if (ref?.current) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (ref?.current?.dataset.id === 'what-we-offer' && (rect.top >= (window.innerHeight || document.documentElement.clientHeight) / 4)) {
        setIsInViewport(null);
      } else {
        setIsInViewport(isVisible ? ref?.current?.dataset.id : null);
      }
    }
  }, [ref]);

  useEffect(() => {
    // Initial check
    checkVisibility();

    // Check on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [checkVisibility]);

  return { isInViewport };
};

export default useInViewport;
