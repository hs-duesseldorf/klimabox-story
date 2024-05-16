import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { SignUpForm } from "../components/signup/index";


export const SignUp: React.FC = () => (
  <Layout>
    <SEO title="Registrierung - Klimabox" />
    <SignUpForm />
  </Layout>
);