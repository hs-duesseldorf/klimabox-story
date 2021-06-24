import React from "react";

import { PostData } from "../wp";

export const PostContent: React.FC<PostData> = ({ post }) => (
  <div
    className="prose prose-lg"
    dangerouslySetInnerHTML={{ __html: post.content }}
  />
);
