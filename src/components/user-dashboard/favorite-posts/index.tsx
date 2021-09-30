import React from "react";
import { Post } from "../../blog/feed/post";
import { FeedItemData, useFeed } from "../../blog/wp";

import { Spinner } from "../../spinner";

export const FavoritePosts: React.FC <{ posts: Array<string>, loaded: boolean }> = ({ posts, loaded })  => {
  const { loading, error, data } = useFeed();

  const items = React.useMemo<Array<FeedItemData | undefined>>(
    () =>
      data
        ? data.posts.edges.map((edge) => edge.node)
        : new Array(9).fill(undefined),
    [data]
  );

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
    if (loading || !loaded) return <Spinner />;
    if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;

    return (
      <div>
        <h2 className="text-xl mb-4">
          Meine lieblings Posts
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 xl:gap-16 2xl:grid-cols-3">
        {(items.map(
          (data, i) => {
            if (posts.some((e) => e === data?.slug)) {
              return (
                <Post data={data} key={i} favorits={posts} />
              )
            }
            return null;
          }

        ))}
      </div>
      </div>
    );
  }
};
