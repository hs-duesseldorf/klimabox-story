import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default interface UserInterface {
  id: string,
  email: string,
  admin: boolean
}

export const Profile: React.FC = ()  => {
  const [user, setUser] = useState<UserInterface>()

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

  if (user !== undefined) {
    return (
      <div className="mb-4">
        <h2 className="text-xl">
          Meine Daten
        </h2>
        <p className="text-sm">
          Email:
          {user.email}
        </p>
        <Link to="/edit">
          <p className="text-sm text-em1">
            Bearbeiten
          </p>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        Da ist etwas schief gegangen
      </div>
    )
  }

};
