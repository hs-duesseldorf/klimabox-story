import React from "react";

import { PostData } from "../wp";

export const PostContent: React.FC<PostData> = ({ post }) => (
  <div
    className="relative prose prose-lg overflow-hidden"
    dangerouslySetInnerHTML={{ __html: post.content }}
  />
);
