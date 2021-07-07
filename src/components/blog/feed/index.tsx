import React from "react";

import { useFeed, FeedItemData } from "../wp";
import { Post } from "./post";
import { FilterControl } from "./filter-control";
import { Spinner } from "./spinner";

function PostList() {
  const { loading, error, data } = useFeed();
  const [firstRenderDone, setFirstRenderDone] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 xl:gap-16 2xl:grid-cols-3">
      {items.map((data, i) => (
        <Post data={data} key={i} />
      ))}
    </div>
  );
}

export const Feed: React.FC = () => (
  <>
    <FilterControl />
    <PostList />
  </>
);
