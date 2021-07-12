import React from "react";

import type { PostData } from "../wp";
import { PostDate } from "./date";
import { BookmarkButton } from "./bookmark-button";

export const PostHeading: React.FC<PostData> = ({ post }) => (
  <div className="flex max-w-full">
    <div className="mr-4">
      <div className="mb-2">
        <PostDate date={new Date(post.date)} />
      </div>
      <h1
        className="text-xl font-bold sm:font-normal sm:text-3xl uppercase text-em3 leading-snug md:leading-snug mb-16"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
    </div>
    <div className="flex-shrink-0">
      <BookmarkButton onSolidBackground={true} />
    </div>
  </div>
);
