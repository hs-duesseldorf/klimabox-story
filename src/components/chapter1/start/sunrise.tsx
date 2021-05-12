import React from "react";

import { useScrollProgress } from "../../scroll-animation";

import styles from "./start.module.css";

export const Sunrise: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  useScrollProgress(({ progress }) => {
    if (!ref.current) return;
    ref.current.style.opacity = Math.min(
      1,
      Math.max(0, progress / 0.11)
    ).toString();
  });

  return (
    <div
      className={`${styles.sunrise} fixed inset-0 opacity-0 pointer-events-none`}
      ref={ref}
    />
  );
};
