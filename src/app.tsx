import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

import { WPGraphQLClient } from "./components/blog/wp/graphql-client";

import { ScrollToTop } from "./util/scroll-to-top";

import { NotFound } from "./pages/not-found";
import { Stories } from "./pages/stories";
import { Blog } from "./pages/blog";
import { Post } from "./pages/post";

import { Chapter1 } from "./pages/chapter1";
import { Chapter2 } from "./pages/chapter2";

export const App: React.FC = () => {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <HelmetProvider>
      <WPGraphQLClient>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path="/vom-esstisch-in-die-arktis" component={Chapter1} />
              <Route path="/mobilitaet" component={Chapter2} />

              <Route path="/blog/:slug" component={Post} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/" component={Stories} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </QueryClientProvider>
      </WPGraphQLClient>
    </HelmetProvider>
  );
};
