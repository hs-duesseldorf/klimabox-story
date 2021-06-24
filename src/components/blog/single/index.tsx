import React from "react";
import { useParams } from "react-router-dom";

import { SEO } from "../../seo";
import { usePost, PostData } from "../wp";
import { PostHeading } from "./heading";
import { PostContent } from "./content";

export const SinglePost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { loading, error, data } = usePost(slug);

  return (
    <div className="center-box max-w-2xl">
      {loading ? (
        "Loading..."
      ) : error || !data ? (
        "Es ist ein Fehler aufgetreten."
      ) : (
        <>
          <SEO title={data.post.title} />
          <PostHeading post={data.post} />
          <PostContent post={data.post} />
        </>
      )}
    </div>
  );
};
