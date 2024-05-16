import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const EmailConfirm: React.FC = () => {
  return (
    <Layout>
      <SEO title="Pw Reset " />
      <div className="center-box mt-40 w-full max-w-lg">
        <div className="flex font-medium tracking-wide text-xs mt-2 mb-2">
          Es wurde eine E-Mail an die Angebene Adresse gesendet.
        </div>
        <div className="text-grey-dark mt-6">
          <Link to="/">
            <p className="text-sm text-em1">Zur Startseite</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
