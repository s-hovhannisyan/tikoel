import { useCallback, useEffect, useState } from "react";

const useInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isInViewport, setIsInViewport] = useState<string | null>(null);

  const checkVisibility = useCallback(() => {
    if (!ref?.current) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const elementId = ref.current.dataset.id;
    
    const isVisible = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight &&
      rect.right <= viewportWidth
    );

    if (elementId === 'what-we-offer' && rect.top >= viewportHeight / 4) {
      setIsInViewport(null);
    } else if (elementId === 'contact-us' && rect.top <= viewportHeight / 4) {
      setIsInViewport(elementId);
    } else {
      setIsInViewport(isVisible ? elementId ?? null : null);
    }
  }, [ref]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Initial check
    checkVisibility();

    // Check on scroll and resize
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [checkVisibility, ref]);

  return { isInViewport };
};

export default useInViewport;
