import { gql, useQuery } from "@apollo/client";

const LatestPost = gql`
  query GetFeed($param: String, $tags: [String], $categories: [ID]) {
    posts(
      first: 1
      where: { search: $param, tagSlugAnd: $tags, categoryIn: $categories }
    ) {
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
              sourceUrl(size: LARGE)
            }
          }
          tags {
            edges {
              node {
                id
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
  id: string;
  slug: string;
  name: string;
};

export type LatestPostData = {
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
    edges: { node: LatestPostData };
  };
};

export const useLatestPost = () =>
  useQuery<FeedData>(LatestPost);