import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button } from "./button";

import searchIcon from "./search.svg";
import searchIconDark from "./searchDark.svg";
import { logout } from "../../users_api/UserAPI";

export const Header: React.FC<{ onDark?: boolean }> = ({ onDark }) => {
  const [user, setUser] = useState()
  const { pathname } = useLocation();
  let history = useHistory();


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      setUser(undefined)
    }
  }, [localStorage.getItem('user')]);

  const handleLogout = async () => {
    try {
      await logout()
    } catch(error) {
      console.log(error)
    }
    localStorage.removeItem('user')
    history.push('/')
  }

  return (
    <div className="absolute w-full top-0 pt-6 pb-6 mb-3 z-10">
      <div className="center-box">
        <div className="uppercase tracking-wider flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={cn(
                "text-3xl pb-1 mr-6",
                onDark ? "text-em1-light" : "text-em1"
              )}
            >
              <Link to="/" className="inline-block pr-10 relative font-semibold">
                <div
                  className={cn(
                    "absolute top-1 bottom-0 right-0 w-1",
                    onDark ? "bg-em1-light" : "bg-em1"
                  )}
                />
                Klimabox
              </Link>
            </div>
            <div
              className={cn(
                "pb-1.5 text-xl sm:text-2xl text-right sm:flex items-end sm:-mx-3",
                onDark && "text-white"
              )}
            >
              {[
                ["Story", "/"],
                ["Archiv", "/blog"]
              ].map(([label, path], i) => (
                <div key={i} className="sm:mx-3">
                  <Link
                    to={path}
                    className={cn(
                      "inline-block pt-1 border-b-2 border-transparent transition",
                      onDark ? "hover:border-white" : "hover:border-black",
                      pathname === path && "font-extrabold"
                    )}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center text-white">
            {
              onDark ? <img
                src={searchIcon}
                alt="Suche Icon"
                className="w-full h-full pr-4"
              /> : <img
                src={searchIconDark}
                alt="Suche Icon"
                className="w-full h-full pr-4"
              />
            }
            { user ? (
              <>
                <Link to="dashboard">
                  <Button onDark={onDark}>Mein Bereich</Button>
                </Link>
                <Button buttonOutline={true} onDark={onDark} onClick={() => handleLogout()}>Logout</Button>
              </>
            ) : (
              <>
                <Link to="signin">
                  <Button onDark={onDark}>Einloggen</Button>
                </Link>
                <Link to="signup">
                  <Button buttonOutline={true} onDark={onDark}>Registrieren</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
