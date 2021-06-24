import React from "react";
import { Link } from "react-router-dom";

import { FeedItemData } from "../../wp";

import { BookmarkButton } from "./bookmark-button";
import { DetailBar } from "./detail-bar";

export const Post: React.FC<{ data: FeedItemData }> = ({
  data: { title, slug, excerpt, featuredImage, date, tags },
}) => {
  const path = `/blog/${slug}`;

  return (
    <div className="flex flex-col relative">
      <Link to={path} className="block">
        <div className="relative pt-2/3 xs:pt-1/2 bg-gray-400 rounded-t-3xl">
          {featuredImage ? (
            <img
              src={featuredImage.node.sourceUrl}
              className="responsive-inset object-cover rounded-t-3xl select-none"
              alt={title}
            />
          ) : null}
        </div>
      </Link>
      <div className="flex-1 py-3 px-4 bg-bg-alt md:py-4 md:px-5">
        <div className="uppercase font-semibold leading-snug text-lg">
          <Link to={path} dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        {excerpt && (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: excerpt }}
              className="text-sm mt-2 line-clamp-3 max-w-prose"
            />
            <Link
              to={path}
              className="inline-block mt-2 text-em3 text-sm font-semibold hover:underline"
            >
              mehr lesen
            </Link>
          </>
        )}
      </div>
      <div className="pt-3">
        <DetailBar date={date} term={tags && tags.edges[0]?.node} />
      </div>
      <div className="absolute right-1 -top-5">
        <BookmarkButton />
      </div>
    </div>
  );
};
