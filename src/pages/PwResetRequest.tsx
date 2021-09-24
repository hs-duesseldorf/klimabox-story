import React from "react";
import { Layout } from "../components/layout";
import { PwResetRequestForm } from "../components/pw_reset_request";
import { SEO } from "../components/seo";

export const PwResetRequest: React.FC = () => {

  return (
    <Layout>
      <SEO title="Pw Reset Request" />
      <PwResetRequestForm />
    </Layout>
  );
};
