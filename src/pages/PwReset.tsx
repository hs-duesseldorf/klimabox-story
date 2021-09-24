import React from "react";
import { Layout } from "../components/layout";
import { PwResetForm } from "../components/pw_reset";
import { SEO } from "../components/seo";

export const PwReset: React.FC = () => {

  return (
    <Layout>
      <SEO title="Pw Reset " />
      <PwResetForm />
    </Layout>
  );
};
