import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const Blog: React.FC = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="center-box mt-24 text-4xl">
      <p>Hier entsteht der Blog.</p>
    </div>
  </Layout>
);
