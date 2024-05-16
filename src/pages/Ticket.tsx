import React, { useEffect, useState } from "react";
import { match } from "react-router-dom";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { TicketShow } from "../components/ticket";

export const Ticket: React.FC <{ match: match<{ id: string; }> }> = ({ match })=> {
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
        <SEO title="Ticket" />
        <TicketShow id={match.params.id} />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Ticket" />
        <div className="center-box mt-40">
          Kein Zugriff
        </div>
      </Layout>
    )
  }
};
