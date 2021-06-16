import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { WPGraphQLClient } from "./components/blog/wp/graphql-client";

import { ScrollToTop } from "./util/scroll-to-top";

import { NotFound } from "./pages/not-found";
import { Stories } from "./pages/stories";
import { Blog } from "./pages/blog";
import { Post } from "./pages/post";
import { SignUp } from './pages/sign_up';
import { SignIn } from './pages/sign_in';

import { Chapter1 } from "./pages/chapter1";
import { Chapter2 } from "./pages/chapter2";

export const App: React.FC = () => (
  <HelmetProvider>
    <WPGraphQLClient>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/vom-esstisch-in-die-arktis" component={Chapter1} />
          <Route path="/mobilitaet" component={Chapter2} />

          <Route path="/blog/:slug" component={Post} />
          <Route path="/blog" component={Blog} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />

          <Route exact path="/" component={Stories} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </WPGraphQLClient>
  </HelmetProvider>
);
