import React, { useEffect, useState } from "react";

import { useFeed, FeedItemData } from "../wp";
import { Post } from "./post";
import { FilterControl } from "./filter-control";
import { Spinner } from "../../spinner";
import { SortMethodSelection, defaultSortMethod, SortMethod } from "./sorting";
import { favoritPosts } from "../../../users_api/UserAPI";

function PostList({ sortMethod }: { sortMethod: SortMethod<FeedItemData> }) {
  const [favoritposts, setFavoritPosts] = useState([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { loading, error, data } = useFeed();
  const [firstRenderDone, setFirstRenderDone] = useState(false);

  const fetchFavorits = async () => {
    let response;
    try {
      response = await favoritPosts();
    } catch (error) {
      setFavoritPosts([]);
    }
    // @ts-ignore
    let slugs = response.slugs;
    setFavoritPosts(JSON.parse(JSON.stringify(slugs)));
    setLoaded(true);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      fetchFavorits();
    } else {
      setLoaded(true);
    }
    if (data) setFirstRenderDone(true);
  }, [data]);

  const items = React.useMemo<Array<FeedItemData | undefined>>(
    () =>
      data
        ? data.posts.edges.map((edge) => edge.node)
        : new Array(9).fill(undefined),
    [data]
  );

  if (error) return <div>Es ist ein Fehler aufgetreten.</div>;

  if (loading && firstRenderDone) return <Spinner />;

  if (loaded) {
    return (
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 xl:gap-16 2xl:grid-cols-3">
        {(items[0] ? (items as FeedItemData[]).sort(sortMethod.fn) : items).map(
          (data, i) => (
            <Post data={data} key={i} favorits={favoritposts} />
          )
        )}
      </div>
    );
  }

  return <Spinner />
}

export const Feed: React.FC = () => {
  const [sortMethod, setSortMethod] =
    React.useState<SortMethod<FeedItemData>>(defaultSortMethod);

  return (
    <>
      <div className="mb-12">
        <FilterControl />
      </div>
      <div className="mb-6">
        <SortMethodSelection<FeedItemData> setSortMethod={setSortMethod} />
      </div>
      <PostList sortMethod={sortMethod} />
    </>
  );
};
