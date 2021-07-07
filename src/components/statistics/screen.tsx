import React from "react";

export function useOnScreen(
  ref: React.RefObject<HTMLElement>,
  rootMargin?: string
) {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (mounted) setIntersecting(isIntersecting);
      },
      { rootMargin }
    );
    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
      mounted = false;
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export function useWasOnScreen(
  ref: React.RefObject<HTMLElement>,
  rootMargin?: string
) {
  const isOnScreen = useOnScreen(ref, rootMargin);
  const [wasOnScreen, setWasOnScreen] = React.useState(isOnScreen);

  React.useEffect(() => {
    if (isOnScreen) setWasOnScreen(true);
  }, [isOnScreen]);

  return wasOnScreen;
}
