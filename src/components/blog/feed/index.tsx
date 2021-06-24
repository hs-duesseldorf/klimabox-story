import React from "react";

import { useFeed } from "../wp";
import { Post } from "./post";

export const Feed: React.FC = () => {
  const { loading, error, data } = useFeed();

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 xl:gap-16 2xl:grid-cols-3">
      {data.posts.edges.map(({ node }, i) => (
        <Post data={node} key={i} />
      ))}
    </div>
  );
};
