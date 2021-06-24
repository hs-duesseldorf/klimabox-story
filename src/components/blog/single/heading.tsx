import React from "react";

import { PostData } from "../wp";

export const PostHeading: React.FC<PostData> = ({ post }) => (
  <h1
    className="text-4xl mb-16"
    dangerouslySetInnerHTML={{ __html: post.title }}
  />
);
