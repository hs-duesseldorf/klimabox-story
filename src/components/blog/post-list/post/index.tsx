import React from "react";
import { Link } from "react-router-dom";

import { Media } from "../media";
import { PostData } from "../../wp";

import { BookmarkButton } from "./bookmark-button";
import { DetailBar } from "./detail-bar";

// const Link: React.FC<{ slug: string; className: string; }> = ({ slug, className }) => (
//   <BaseLink
//     to={`/blog/${slug}`}
//   ></BaseLink>
// );

export const Post: React.FC<{ data: PostData }> = ({
  data: { title, slug, excerpt, featured_media, date, _embedded },
}) => {
  const path = `/blog/${slug}`;

  return (
    <div className="flex flex-col relative">
      <Link to={path} className="block">
        <div className="relative pt-2/3 xs:pt-1/2 bg-gray-400 rounded-t-3xl">
          {featured_media ? (
            <Media
              id={featured_media}
              className="responsive-inset object-cover rounded-t-3xl select-none"
              alt={title.rendered}
            />
          ) : null}
        </div>
      </Link>
      <div className="flex-1 py-3 px-4 bg-bg-alt md:py-4 md:px-5">
        <div className="uppercase font-semibold leading-snug text-lg">
          <Link
            to={path}
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
        </div>
        {excerpt && (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
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
        <DetailBar date={date} term={_embedded && _embedded["wp:term"][0][0]} />
      </div>
      <div className="absolute right-1 -top-5">
        <BookmarkButton />
      </div>
    </div>
  );
};
