import { useQuery } from "react-query";

import { WP_REST_URL } from "./config";

import type { PostData } from "./post";

export const usePosts = () =>
  useQuery<PostData[]>("getPosts", () =>
    fetch(`${WP_REST_URL}/posts?_embed=1`).then((res) => res.json())
  );
