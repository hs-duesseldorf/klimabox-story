import React from "react";

import { Layout } from "../components/layout";
import { SinglePost } from "../components/blog/single";

export const Post: React.FC = () => (
  <Layout>
    <div className="mt-40">
      <SinglePost />
    </div>
  </Layout>
);
