import React from "react";

import { usePosts } from "../wp";
import { Post } from "./post";

export const PostList: React.FC = () => {
  const { isLoading, error, data } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-x-10 xl:gap-16 2xl:grid-cols-3">
      {data.map((postData, i) => (
        <Post data={postData} key={i} />
      ))}
    </div>
  );
};
