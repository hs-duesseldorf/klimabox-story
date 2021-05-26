import { useQuery } from "react-query";

import { WP_REST_URL } from "./config";

type StringData = { rendered: string; protected?: boolean };

export type PostData = {
  id: number;
  slug: string;
  status: string;
  type: string;
  title: StringData;
  date: string;
  content?: StringData;
  excerpt?: StringData;
  featured_media?: number;
  _embedded?: {
    "wp:term": {
      name: string;
      slug: string;
    }[][];
  };
};

export const usePost = (slug: string) =>
  useQuery<PostData>(["getPost", slug], () =>
    fetch(`${WP_REST_URL}/posts/?slug=${slug}&_embed=1`)
      .then((res) => res.json())
      .then((res) => res[0])
  );
