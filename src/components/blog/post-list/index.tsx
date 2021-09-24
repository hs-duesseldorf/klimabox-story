import React, { useEffect, useState } from "react";
import { favoritPosts } from "../../../users_api/UserAPI";

import { usePosts } from "../wp";
import { Post } from "./post";

export const PostList: React.FC = () => {
  const [favoritposts, setFavoritPosts] = useState([]);
  const { isLoading, error, data } = usePosts();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const fetchFavorits = async () => {
        let response;
        try {
          response = await favoritPosts()
        } catch(error) {
          console.log(error)
        }
        // @ts-ignore
        let slugs = response.slugs
        setFavoritPosts(JSON.parse(JSON.stringify(slugs)))
      }
      fetchFavorits();
    }
  }, [])

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Es ist ein Fehler aufgetreten.</div>;

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 xl:gap-16 2xl:grid-cols-3">
      {data.map((postData, i) => (
        <Post data={postData} key={i} favorit={favoritposts.some((e) => e === postData.slug) ? true : false}/>
      ))}
    </div>
  );
};
