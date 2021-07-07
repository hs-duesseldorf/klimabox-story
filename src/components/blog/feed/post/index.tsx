import React from "react";
import { Link } from "react-router-dom";

import { FeedItemData, TagData } from "../../wp";

import { PostImage } from "./image";
import { BookmarkButton } from "./bookmark-button";
import { DetailBar } from "./detail-bar";

export type ParsedPostData = {
  path: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  tags?: TagData[];
};

export const Post: React.FC<{ data?: FeedItemData }> = ({ data }) => {
  const parsedData = React.useMemo<ParsedPostData | undefined>(
    () =>
      data && {
        path: `/blog/${data.slug}`,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        featuredImage: data.featuredImage && {
          url: data.featuredImage.node.sourceUrl,
          alt: data.title,
        },
        tags:
          (data.tags &&
            data.tags.edges.length &&
            data.tags.edges.map((edge) => edge.node)) ||
          undefined,
      },
    [data]
  );

  return (
    <div className="flex flex-col relative">
      <PostImage data={parsedData} />
      <div className="flex-1 py-3 px-4 bg-bg-alt md:py-4 md:px-5">
        <div className="uppercase font-semibold leading-snug text-lg">
          {parsedData ? (
            <Link
              to={parsedData.path}
              dangerouslySetInnerHTML={{ __html: parsedData.title }}
            />
          ) : (
            <div className="bg-gray-200 h-6 w-9/12 rounded-sm" />
          )}
        </div>
        {parsedData ? (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: parsedData.excerpt }}
              className="text-sm mt-2 line-clamp-3 max-w-prose"
            />
            <Link
              to={parsedData.path}
              className="inline-block mt-2 text-em3 text-sm font-semibold hover:underline"
            >
              mehr lesen
            </Link>
          </>
        ) : (
          <>
            <div className="bg-gray-200 h-4 rounded-sm mt-2" />
            <div className="bg-gray-200 h-4 rounded-sm mt-1" />
            <div className="bg-gray-200 h-4 rounded-sm mt-1" />
          </>
        )}
      </div>
      {parsedData && (
        <div className="pt-3">
          <DetailBar date={parsedData.date} terms={parsedData.tags} />
        </div>
      )}
      <div className="absolute right-1 -top-5">
        <BookmarkButton disabled={!parsedData} />
      </div>
    </div>
  );
};
