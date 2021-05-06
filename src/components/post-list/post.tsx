import React from "react";

import { Media } from "./media";
import { PostData } from "../../wp";

export const Post: React.FC<{ data: PostData }> = ({
  data: { title, excerpt, featured_media },
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-w-2 aspect-h-1 bg-gray-400 rounded-t-3xl">
        {featured_media ? (
          <Media
            id={featured_media}
            className="object-cover rounded-t-3xl select-none"
          />
        ) : null}
      </div>
      <div className="flex-1 py-3 px-4 bg-bg-alt md:py-4 md:px-5">
        <div
          dangerouslySetInnerHTML={{ __html: title.rendered }}
          className="uppercase text-xl"
        />
        {excerpt && (
          <div
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
            className="text-sm mt-2 line-clamp-3 max-w-prose"
          />
        )}
      </div>
    </div>
  );
};
