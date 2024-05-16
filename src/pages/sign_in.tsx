import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

import { SignInForm } from "../components/signin/index";


export const SignIn: React.FC = () => (
  <Layout>
    <SEO title="Login - Klimabox" />
    <SignInForm />
  </Layout>
);