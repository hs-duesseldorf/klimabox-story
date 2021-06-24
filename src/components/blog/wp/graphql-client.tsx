import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://klimabox.mirevi.de/graphql/",
  cache: new InMemoryCache(),
});

export const WPGraphQLClient: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
