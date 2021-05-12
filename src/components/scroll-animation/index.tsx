import React from "react";

type ScrollProgressState = {
  progress: number;
  bottomProgress: number;
};

type ScrollProgressCallback = (state: ScrollProgressState) => void;

export type ScrollManager = {
  subscribe(
    ref: React.MutableRefObject<ScrollProgressCallback>,
    priority?: number
  ): () => void;
};

const Context = React.createContext<ScrollManager>({
  subscribe: () => () => ({}),
});

export function useScrollProgress(
  cb: ScrollProgressCallback,
  priority = 0
): void {
  const { subscribe } = React.useContext(Context);
  const ref = React.useRef(cb);
  React.useLayoutEffect(() => void (ref.current = cb), [cb]);
  React.useEffect(() => subscribe(ref, priority), [priority, subscribe]);
}

export const ScrollAnimation: React.FC<{ height?: string | number }> = ({
  children,
  height,
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const subscriberRef = React.useRef<
    { ref: React.MutableRefObject<ScrollProgressCallback>; priority: number }[]
  >([]);

  const manager = React.useMemo<ScrollManager>(
    () => ({
      subscribe(ref, priority = 0) {
        subscriberRef.current.push({ ref, priority });
        subscriberRef.current = subscriberRef.current.sort(
          (a, b) => a.priority - b.priority
        );

        return () => {
          subscriberRef.current = subscriberRef.current.filter(
            (s) => s.ref !== ref
          );
        };
      },
    }),
    []
  );

  React.useEffect(() => {
    const wrapper = wrapperRef.current!;
    let position = 0;
    let height = 1;

    let lastProgress = -1;
    let lastBottomProgress = -1;

    function handleScroll() {
      const subscribers = subscriberRef.current;
      if (!subscribers.length) return;

      const progress = Math.max(
        0,
        Math.min(1, (window.scrollY - position) / height)
      );

      const bottomProgress = Math.max(
        0,
        Math.min(1, (window.scrollY + window.innerHeight - position) / height)
      );

      let needsUpdate =
        progress !== lastProgress || bottomProgress !== lastBottomProgress;

      lastProgress = progress;
      lastBottomProgress = bottomProgress;

      if (!needsUpdate) return;

      const state = { progress, bottomProgress };

      subscribers.forEach((sub) => sub.ref.current(state));
    }

    const observer = new ResizeObserver(([{ contentRect }]) => {
      position = contentRect.top + window.scrollY;
      height = contentRect.height;
      handleScroll();
    });
    observer.observe(wrapper);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ height }} ref={wrapperRef}>
      <Context.Provider value={manager}>{children}</Context.Provider>
    </div>
  );
};
