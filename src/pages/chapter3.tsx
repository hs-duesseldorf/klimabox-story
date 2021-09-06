import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import {StartChapter3} from "../components/chapter3/start";

export const Chapter3: React.FC = () => (
  <Layout chapter={3} hasDarkBackground={false}>
    <SEO title="Big Tech" />
    <StartChapter3 />
  </Layout>
);
