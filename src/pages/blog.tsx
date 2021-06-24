import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { Feed } from "../components/blog/feed";

export const Blog: React.FC = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="center-box mt-40">
      <Feed />
    </div>
  </Layout>
);
