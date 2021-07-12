import React from "react";

import { useFeed, FeedItemData } from "../wp";
import { Post } from "./post";
import { FilterControl } from "./filter-control";
import { Spinner } from "../../spinner";
import { SortMethodSelection, defaultSortMethod, SortMethod } from "./sorting";

function PostList({ sortMethod }: { sortMethod: SortMethod<FeedItemData> }) {
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
      {(items[0] ? (items as FeedItemData[]).sort(sortMethod.fn) : items).map(
        (data, i) => (
          <Post data={data} key={i} />
        )
      )}
    </div>
  );
}

export const Feed: React.FC = () => {
  const [sortMethod, setSortMethod] =
    React.useState<SortMethod<FeedItemData>>(defaultSortMethod);

  return (
    <>
      <FilterControl />
      <div className="mb-4">
        <SortMethodSelection<FeedItemData> setSortMethod={setSortMethod} />
      </div>
      <PostList sortMethod={sortMethod} />
    </>
  );
};
