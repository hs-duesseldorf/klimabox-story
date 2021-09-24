import React from "react";

import { Post } from "../../blog/post-list/post";
import { usePost } from "../../blog/wp";


export const LatestBlogPost: React.FC <{ posts: Array<string> }> = ({ posts })   => {
  const { isLoading, error, data } = usePost("dauerbrenner-braunkohleausstieg-klimaschuetzerinnen-sitzen-auf-heissen-kohlen");

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;

  let favorit = false;
  posts.forEach((post) => {
    if (post === data.slug) {
      favorit = true
    }
  })

  return (
    <div>
      <h2 className="text-xl mb-4">
        Latest Post
      </h2>
      <div>
        <Post data={data} favorit={favorit}/>
      </div>
    </div>
  );

};
