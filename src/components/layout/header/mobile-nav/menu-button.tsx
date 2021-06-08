import React from "react";
import cn from "classnames";

import styles from "./nav.module.css";

export function MenuButton({
  active,
  onClick,
  onDark,
}: {
  active?: boolean;
  onClick?: () => void;
  onDark?: boolean;
}) {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const barStyles = `${styles.menuButtonBar} ${
    hasScrolled || !onDark ? "bg-gray-900" : "bg-gray-50"
  }`;

  return (
    <button
      className={cn(styles.menuButton, active && styles.menuButtonActive)}
      onClick={onClick}
    >
      <div className={barStyles} />
      <div className={barStyles} />
      <div className={barStyles} />
    </button>
  );
}
