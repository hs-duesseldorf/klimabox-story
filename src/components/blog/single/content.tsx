import React from "react";

import { PostData } from "../wp";

export const PostContent: React.FC<{ post: PostData }> = ({ post }) => (
  <div
    className="prose-lg"
    dangerouslySetInnerHTML={{ __html: post.content?.rendered || "" }}
  />
);
