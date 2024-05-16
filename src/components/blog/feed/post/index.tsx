import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { FeedItemData, TagData } from "../../wp";

import { PostImage } from "./image";
import { BookmarkButton } from "../../single/bookmark-button";
import { DetailBar } from "./detail-bar";

import styles from "./post.module.css";
import { LatestPostData } from "../../wp/latest_post";

export type ParsedPostData = {
  slug: string;
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

export const Post: React.FC<{ data?: FeedItemData | LatestPostData, favorits: string[]}> = ({ data, favorits }) => {
  const parsedData = React.useMemo<ParsedPostData | undefined>(
    () =>
      data && {
        slug: data.slug,
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
    <div className={cn(!data && styles.pulse, "flex flex-col relative")}>
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
        <BookmarkButton slug={parsedData ? parsedData.slug : ""} disabled={!parsedData} posts={favorits} />
      </div>
    </div>
  );
};
