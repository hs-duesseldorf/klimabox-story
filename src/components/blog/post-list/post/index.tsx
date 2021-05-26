import React from "react";

import { Media } from "../media";
import { PostData } from "../../wp";

import { BookmarkButton } from "./bookmark-button";

export const Post: React.FC<{ data: PostData }> = ({
  data: { title, excerpt, featured_media },
}) => {
  return (
    <div className="flex flex-col relative">
      <div className="relative pt-2/3 xs:pt-1/2 bg-gray-400 rounded-t-3xl">
        {featured_media ? (
          <Media
            id={featured_media}
            className="responsive-inset object-cover rounded-t-3xl select-none"
            alt={title.rendered}
          />
        ) : null}
      </div>
      <div className="flex-1 py-3 px-4 bg-bg-alt md:py-4 md:px-5">
        <div
          dangerouslySetInnerHTML={{ __html: title.rendered }}
          className="uppercase font-semibold leading-snug text-lg"
        />
        {excerpt && (
          <div
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
            className="text-sm mt-2 line-clamp-3 max-w-prose"
          />
        )}
      </div>
      <div className="absolute right-1 -top-5">
        <BookmarkButton />
      </div>
    </div>
  );
};
