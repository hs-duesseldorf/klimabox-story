import React, { useEffect, useState } from "react";
import cn from "classnames";

import { BookmarkIcon } from "./icon";

import styles from "./bookmark.module.css";
import { deFavorisePost, favorisePost } from "../../../../users_api/UserAPI";

export const BookmarkButton: React.FC<{
  disabled?: boolean;
  onSolidBackground?: boolean;
  slug: string;
  posts: string[];
}> = ({ disabled, onSolidBackground, slug, posts }) => {
  const [active, setActive] = useState(false);

  const updateFavorise = async (slug: string) => {
    let favorite_blogpost = {
      slug,
    };
    if (active) {
      try {
        await deFavorisePost(favorite_blogpost);
      } catch (error) {
      }
    } else {
      try {
        await favorisePost(favorite_blogpost);
      } catch (error) {
      }
    }
  };


  useEffect(() => {
    if (posts.includes(slug)) {
      setActive(true);
    }
  }, [posts, slug]);



  return (
    <button
      className={cn(styles.button, "group", active && styles.active)}
      onClick={() => {
        setActive(!active);
        updateFavorise(slug);
      }}
      disabled={disabled}
    >
      <div className="pointer-events-none">
        <BookmarkIcon
          {...(onSolidBackground
            ? {
                disableShadow: true,
                strokeWidth: 3,
              }
            : undefined)}
        />
      </div>
    </button>
  );
};
