import React from "react";
import cn from "classnames";

import { BookmarkIcon } from "./icon";

import styles from "./bookmark.module.css";

export const BookmarkButton: React.FC<{
  disabled?: boolean;
  disableShadow?: boolean;
}> = ({ disabled, disableShadow }) => {
  const [active, setActive] = React.useState(false);

  return (
    <button
      className={cn(styles.button, "group", active && styles.active)}
      onClick={() => setActive(!active)}
      disabled={disabled}
    >
      <div className="pointer-events-none">
        <BookmarkIcon disableShadow={disableShadow} />
      </div>
    </button>
  );
};
