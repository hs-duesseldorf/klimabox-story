import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { UserDashboard } from "../components/user-dashboard";


export const Dashboard: React.FC = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      setUser(undefined)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('user')]);

  if (user) {
    return (
      <Layout>
        <SEO title="Dashboard" />
        <UserDashboard />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Dashboard" />
        <div className="center-box mt-40">
          Kein Zugriff
        </div>
      </Layout>
    )
  }
};
