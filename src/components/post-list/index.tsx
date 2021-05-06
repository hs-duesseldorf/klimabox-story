import React from "react";

import { usePosts } from "../../wp";
import { Post } from "./post";

export const PostList: React.FC = () => {
  const { isLoading, error, data } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 2xl:grid-cols-3 2xl:gap-10">
      {data.map((postData, i) => (
        <Post data={postData} key={i} />
      ))}
    </div>
  );
};
