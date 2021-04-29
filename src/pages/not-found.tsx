import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const NotFound: React.FC = () => (
  <Layout>
    <SEO title="404" />
    <div className="center-box mt-24 text-4xl">
      <p>Die Seite konnte nicht gefunden werden.</p>
    </div>
  </Layout>
);
