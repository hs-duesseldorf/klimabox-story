import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { Chapter1 as Story } from "../components/chapter1";

export const Chapter1: React.FC = () => (
  <Layout hasDarkBackground={true}>
    <SEO title="Vom Esstisch in die Arktis" />
    <Story />
  </Layout>
);
