import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const Stories: React.FC = () => (
  <Layout>
    <SEO title="Story" />
    <div className="center-box mt-24 text-4xl">
      <p>Hier entstehen die Stories.</p>
    </div>
  </Layout>
);
