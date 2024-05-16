import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { WPGraphQLClient } from "./components/blog/wp/graphql-client";

import { ScrollToTop } from "./util/scroll-to-top";

import { NotFound } from "./pages/not-found";
import { Stories } from "./pages/stories";
import { Blog } from "./pages/blog";
import { Post } from "./pages/post";
import { SignUp } from "./pages/sign_up";
import { SignIn } from "./pages/sign_in";
import { Dashboard } from "./pages/Dashboard";
import { Edit } from "./pages/Edit";

import { Chapter1 } from "./pages/chapter1";
import { Chapter2 } from "./pages/chapter2";
import { Ticket } from "./pages/Ticket";
import { PwResetRequest } from "./pages/PwResetRequest";
import { PwReset } from "./pages/PwReset";
import { EmailConfirm } from "./pages/EmailConfirm";
import { Chapter3 } from "./pages/chapter3";

export const App: React.FC = () => (
  <HelmetProvider>
    <WPGraphQLClient>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/vom-esstisch-in-die-arktis" component={Chapter1} />
          <Route path="/mobilitaet" component={Chapter2} />
          <Route path="/big-tech" component={Chapter3} />

          <Route path="/blog/:slug" component={Post} />
          <Route path="/blog" component={Blog} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/ticket/:id" render={(props) => <Ticket {...props} />} />
          <Route path="/edit" component={Edit} />
          <Route path="/request_reset" component={PwResetRequest} />
          <Route path="/reset_password" component={PwReset} />
          <Route path="/email_confirm" component={EmailConfirm} />

          <Route exact path="/" component={Stories} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </WPGraphQLClient>
  </HelmetProvider>
);
