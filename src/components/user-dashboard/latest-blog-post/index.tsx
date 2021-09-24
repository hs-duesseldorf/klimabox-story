import React from "react";
import { Post } from "../../blog/feed/post";

import { LatestPostData, useLatestPost } from "../../blog/wp/latest_post";
import { Spinner } from "../../spinner";


export const LatestBlogPost: React.FC <{ posts: Array<string>, loaded: boolean }> = ({ posts, loaded })   => {
  const { loading, error, data } = useLatestPost();
  const item = React.useMemo<LatestPostData | undefined>(
    () =>
      data
        ? data.posts.edges[0].node
        : undefined,
    [data]
  );

  if (loading || !loaded) return <div><Spinner /></div>;
  if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;


  return (
    <div>
      <h2 className="text-xl mb-4">
        Latest Post
      </h2>
      <div>
        <Post data={item} favorits={posts}/>
      </div>
    </div>
  );

};
