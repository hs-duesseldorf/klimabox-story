import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SEO } from "../../seo";
import { usePost } from "../wp";
import { PostHeading } from "./heading";
import { PostContent } from "./content";
import { Spinner } from "../../spinner";
import { favoritPosts } from "../../../users_api/UserAPI";

export const SinglePost: React.FC = () => {
  const [favoritposts, setFavoritPosts] = useState([]);
  const { slug } = useParams<{ slug: string }>();
  const { loading, error, data } = usePost(slug);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const fetchFavorits = async () => {
        let response;
        try {
          response = await favoritPosts()
        } catch(error) {
          setFavoritPosts([])
        }
        // @ts-ignore
        let slugs = response.slugs
        setFavoritPosts(JSON.parse(JSON.stringify(slugs)))
      }
      fetchFavorits();
    }
  }, [])

  return (
    <div className="center-box max-w-2xl">
      {loading ? (
        <Spinner />
      ) : error || !data ? (
        "Es ist ein Fehler aufgetreten."
      ) : (
        <>
          <SEO title={data.post.title} />
          <PostHeading post={data} favorits={favoritposts} />
          <PostContent post={data.post} />
        </>
      )}
    </div>
  );
};
