import React from "react";
import cn from "classnames";

import { BookmarkIcon } from "./icon";

import styles from "./bookmark.module.css";
import { deFavorisePost, favorisePost } from "../../../../../users_api/UserAPI";

export const BookmarkButton: React.FC <{ slug: string, favorit: boolean }> = ({ slug, favorit }) => {
  const [active, setActive] = React.useState(favorit);

  const updateFavorise = async (slug: string) => {
    let favorite_blogpost = {
        slug
    }
    if (active) {
      try {
        await deFavorisePost(favorite_blogpost)
      } catch(error) {
        console.log(error)
      }
    } else {
      try {
        await favorisePost(favorite_blogpost)
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    <button
      className={cn(
        styles.button,
        "cursor-pointer group",
        active && styles.active
      )}
      onClick={() => {
        setActive(!active);
        updateFavorise(slug);
      }}
    >
      <div className="pointer-events-none">
        <BookmarkIcon />
      </div>
    </button>
  );
};
