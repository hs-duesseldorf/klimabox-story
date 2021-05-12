import React from "react";

import { useScrollProgress } from "../../scroll-animation";

import styles from "./start.module.css";

export const Heading: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  useScrollProgress(({ progress }) => {
    if (!ref.current) return;
    ref.current.style.opacity = (1 - Math.min(1, progress / 0.1)).toString();
  });

  return (
    <div className="center-box pt-40 2xl:pt-56" ref={ref}>
      <h1 className={`${styles.heading} font-bold uppercase`}>
        Vom Esstisch
        <br />
        in die Arktis
      </h1>
    </div>
  );
};
