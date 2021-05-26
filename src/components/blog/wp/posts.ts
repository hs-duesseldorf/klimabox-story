import { useQuery } from "react-query";

import { WP_REST_URL } from "./config";

type StringData = { rendered: string; protected?: boolean };

export type PostData = {
  id: number;
  slug: string;
  status: string;
  type: string;
  title: StringData;
  content?: StringData;
  excerpt?: StringData;
  featured_media?: number;
};

export const usePosts = () =>
  useQuery<PostData[]>("getPosts", () =>
    fetch(`${WP_REST_URL}/posts`).then((res) => res.json())
  );
