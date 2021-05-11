import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { StorySplash } from "../components/story-splash";

export const Stories: React.FC = () => (
  <Layout hasDarkBackground={true}>
    <SEO title="Story" />
    <StorySplash />
  </Layout>
);
