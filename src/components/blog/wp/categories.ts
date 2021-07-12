import { gql, useQuery } from "@apollo/client";

const FEED = gql`
  query GetCategories {
    categories {
      nodes {
        id
        databaseId
        slug
        name
      }
    }
  }
`;

export type CategoryData = {
  id: string;
  databaseId: number;
  slug: string;
  name: string;
};

type CategoriesData = {
  categories: {
    nodes: CategoryData[];
  };
};

export function useCategories() {
  return useQuery<CategoriesData>(FEED);
}
