import React from "react";
import { Helmet } from "react-helmet-async";

const siteTitle = "Klimabox";

export const SEO: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
    </Helmet>
  );
};
