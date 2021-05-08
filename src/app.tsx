import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

import { NotFound } from "./pages/not-found";
import { Home } from "./pages/home";
import { Stories } from "./pages/stories";
import { Blog } from "./pages/blog";


export const App: React.FC = () => {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  const [background, setBackground] = useState({
    backgroundImage: "",
    height: "120%",
    Zindex: "-1",
    backgroundPosition: "100% 80%",
    backgroundClip: "padding-box",
  });

  return (
    <div className="absolute top-0 left-0 w-full bg-no-repeat bg-cover bg-fixed p-24" style = {background}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Switch>
              <Route path="/blog" render={()=> <Blog backgroundFunction={setBackground} />} />
              <Route path="/story" render={()=> <Stories backgroundFunction={setBackground} />} />
              <Route exact path="/" render={()=> <Home backgroundFunction={setBackground} />} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  );
};
