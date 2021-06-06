import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { Start } from "../components/chapter1/start";
import { Fridge } from "../components/chapter1/start/fridge";

export const Chapter1: React.FC = () => (
  <Layout hasDarkBackground={true}>
    <SEO title="Vom Esstisch in die Arktis" />
    <Start />
  </Layout>
);
