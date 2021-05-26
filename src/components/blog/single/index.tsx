import React from "react";
import { useParams } from "react-router-dom";

import { SEO } from "../../seo";
import { usePost } from "../wp";
import { PostHeading } from "./heading";
import { PostContent } from "./content";

export const SinglePost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isLoading, error, data } = usePost(slug);

  return (
    <div className="center-box max-w-2xl">
      {isLoading ? (
        "Loading..."
      ) : error || !data ? (
        "Es ist ein Fehler aufgetreten."
      ) : (
        <>
          <SEO title={data.title.rendered} />
          <PostHeading post={data} />
          <PostContent post={data} />
        </>
      )}
    </div>
  );
};
