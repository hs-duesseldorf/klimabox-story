import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { PostList } from "../components/post-list";

export const Blog: React.FC = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="center-box mt-40">
      <PostList />
    </div>
  </Layout>
);
