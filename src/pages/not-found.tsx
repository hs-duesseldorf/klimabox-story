import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const NotFound: React.FC = () => (
  <Layout>
    <SEO title="404" />
    <div className="center-box mt-40">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p>Die Seite konnte nicht gefunden werden.</p>
    </div>
  </Layout>
);
