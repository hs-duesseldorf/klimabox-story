import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NotFound } from "./pages/not-found";
import { Home } from "./pages/home";
import { Stories } from "./pages/stories";
import { Blog } from "./pages/blog";

export const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/blog" component={Blog} />
      <Route path="/story" component={Stories} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
