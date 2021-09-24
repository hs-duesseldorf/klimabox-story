import React, { useEffect, useState } from "react";
import { EditUser } from "../components/edit-user";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { UserDashboard } from "../components/user-dashboard";
import UserInterface from "../components/user-dashboard/profile";


export const Edit: React.FC = () => {
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      setUser(undefined)
    }
  }, [localStorage.getItem('user')]);

  if (user) {
    return (
      <Layout>
        <SEO title="Edit User" />
        <EditUser user={user}/>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Edit User" />
        <div className="center-box mt-40">
          Kein Zugriff
        </div>
      </Layout>
    )
  }
};
