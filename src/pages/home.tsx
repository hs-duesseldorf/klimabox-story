import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const Home: React.FC = () => (
  <Layout>
    <SEO />
    <div className="center-box mt-24 text-4xl">
      <p>Willommen in der Klimabox.</p>
    </div>
  </Layout>
);
