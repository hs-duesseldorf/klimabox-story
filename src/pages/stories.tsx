import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { StorySplash } from "../components/story-splash";
import { ChapterOverview } from "../components/chapter-overview";

export const Stories: React.FC = () => (
  <Layout hasDarkBackground={true} chapter={0}>
    <SEO />
    <StorySplash />
    <ChapterOverview />
  </Layout>
);
