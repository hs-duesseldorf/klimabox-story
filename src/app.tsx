import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

import { NotFound } from "./pages/not-found";
import { Home } from "./pages/home";
import { Stories } from "./pages/stories";
import { Blog } from "./pages/blog";

export const App: React.FC = () => {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/story" component={Stories} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
};
