import { gql, useQuery } from "@apollo/client";
import { useFilterTags } from "../feed/filtering";

const FEED = gql`
  query GetFeed($param: String, $tags: [String]) {
    posts(first: 20, where: { search: $param, tagSlugAnd: $tags }) {
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

export function useFeed() {
  const tags = useFilterTags();

  return useQuery<FeedData, { param?: string; tags?: string[] }>(FEED, {
    variables: {
      tags: tags.map((tag) => tag.slug),
    },
  });
}
