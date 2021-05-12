import React from "react";

import { useScrollProgress } from "../../scroll-animation";

export const Fade: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  useScrollProgress(({ bottomProgress }) => {
    if (!ref.current) return;
    ref.current.style.opacity = (
      1 - Math.min(1, Math.max(0, (1 - bottomProgress) / 0.25))
    ).toString();
  });

  return (
    <div
      className="fixed inset-0 opacity-0 bg-yellow-100 pointer-events-none"
      ref={ref}
    />
  );
};
