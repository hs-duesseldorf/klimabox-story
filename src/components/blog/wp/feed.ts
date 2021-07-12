import { gql, useQuery } from "@apollo/client";
import { useFilteredTags } from "../feed/fitering";

const FEED = gql`
  query GetFeed($param: String, $tags: [String], $categories: [ID]) {
    posts(
      first: 20
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
  const tags = useFilteredTags().items;

  return useQuery<
    FeedData,
    { param?: string; tags?: string[]; categories?: string[] }
  >(FEED, {
    variables: {
      tags: tags.map((tag) => tag.slug),
    },
  });
}
