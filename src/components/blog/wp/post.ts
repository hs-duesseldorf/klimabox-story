import { gql, useQuery } from "@apollo/client";

const POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      date
      content
    }
  }
`;

export type PostData = {
  post: {
    id: string;
    slug: string;
    title: string;
    date: string;
    content: string;
  };
};

export const usePost = (slug: string) =>
  useQuery<PostData, { slug: string }>(POST, { variables: { slug } });
