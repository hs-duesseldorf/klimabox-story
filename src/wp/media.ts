import { useQuery } from "react-query";

import { WP_REST_URL } from "./config";

type WPMediaSizeData = {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
};

type WPMediaData = {
  id: number;
  media_details: {
    sizes: {
      full: WPMediaSizeData;
      large: WPMediaSizeData; // 1024w
      medium_large: WPMediaSizeData; // 768w
      thumbnail: WPMediaSizeData; // 150w
      "1536x1536"?: WPMediaSizeData;
    };
  };
};

export type MediaURLs = {
  sm: string;
  lg: string;
};

type QueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
};

export function useMediaURLs(id: number): QueryResult<MediaURLs> {
  const { isLoading, error, data } = useQuery<WPMediaData>(
    ["getMedia", id],
    () => fetch(`${WP_REST_URL}/media/${id}`).then((res) => res.json())
  );

  return {
    isLoading,
    error,
    data: data && {
      sm: data.media_details.sizes.thumbnail.source_url,
      lg: (
        data.media_details.sizes["1536x1536"] || data.media_details.sizes.full
      ).source_url,
    },
  };
}
