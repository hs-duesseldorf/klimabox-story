import React from "react";
import { Helmet } from "react-helmet";

const siteTitle = "Klimabox";

export const SEO: React.FC<{ title?: string }> = ({ title }) => {
  return <Helmet title={title ? `${siteTitle} | ${title}` : siteTitle} />;
};
