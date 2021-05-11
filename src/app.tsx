import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

import { NotFound } from "./pages/not-found";
import { Stories } from "./pages/stories";
import { Blog } from "./pages/blog";

import { Chapter1 } from "./pages/chapter1";

export const App: React.FC = () => {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/vom-esstisch-in-die-arktis" component={Chapter1} />

            <Route path="/blog" component={Blog} />
            <Route exact path="/" component={Stories} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
};
