import { gql, useQuery } from "@apollo/client";

const FEED = gql`
  query GetFeed($param: String) {
    posts(first: 20, where: { search: $param }) {
      edges {
        node {
          id
          date
          title
          slug
          excerpt
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
          tags {
            edges {
              node {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`;

export type TagData = {
  slug: string;
  name: string;
};

export type FeedItemData = {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  featuredImage?: {
    node: {
      id: string;
      sourceUrl: string;
    };
  };
  tags: {
    edges: { node: TagData }[];
  };
};

type FeedData = {
  posts: {
    edges: { node: FeedItemData }[];
  };
};

export const useFeed = () => useQuery<FeedData, { param?: string }>(FEED);
