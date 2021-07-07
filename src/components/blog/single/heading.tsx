import React from "react";

import { PostData } from "../wp";

export const PostHeading: React.FC<PostData> = ({ post }) => (
  <h1
    className="text-4xl leading-snug md:text-5xl md:leading-snug mb-16"
    dangerouslySetInnerHTML={{ __html: post.title }}
  />
);
