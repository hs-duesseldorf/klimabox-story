import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import {StartChapter2} from "../components/chapter2/start";

export const Chapter2: React.FC = () => (
  <Layout chapter={2} hasDarkBackground={true}>
    <SEO title="Mobilität" />
    <StartChapter2 />
  </Layout>
);