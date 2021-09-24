import React from "react";

import { Post } from "../../blog/post-list/post";
import { useFavoritPost } from "../../blog/wp/favorit_posts";

export const FavoritePosts: React.FC <{ posts: Array<string> }> = ({ posts })  => {
  const { isLoading, error, data } = useFavoritPost(posts);
  if (posts.length === 0) {
    return (
      <div>
      <h2 className="text-xl">
        Meine lieblings Posts
      </h2>
      <div className="text-sm text-red-300">
        Du hast noch keine Lieblinsposts. Merke dir Posts und sie werden dir hier angezeigt.
      </div>
    </div>
    )
  } else {
    if (isLoading) return <div>Loading...</div>;
    if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;

    return (
      <div>
        <h2 className="text-xl mb-4">
          Meine lieblings Posts
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 xl:gap-16 2xl:grid-cols-3">
          {data.map((postData, i) => (
            <Post data={postData} key={i} favorit={true}/>
          ))}
        </div>
      </div>
    );
  }
};
