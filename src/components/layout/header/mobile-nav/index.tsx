import React from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

import type { NavItem } from "..";

import { MenuButton } from "./menu-button";
import { SearchButton } from "../search-button";

export function MobileNav({
  items,
  onDark,
  user,
  handleLogOut,
}: {
  items: NavItem[];
  onDark?: boolean;
  user?: any;
  handleLogOut: () => void;
}) {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className={`absolute inset-0 bg-gray-50 transition duration-500 ${
          open ? "pointer-events-auto opacity-50" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`h-screen overflow-y-auto bg-em1 text-gray-50 pt-28 absolute max-w-sm transition-all duration-200 pointer-events-auto text-right pl-10 pr-6 sm:pr-8 ${
          open ? "right-0" : "-right-96"
        }`}
      >
        <div className="mb-8 text-2xl sm:text-3xl">
          {items.map(({ label, path }, i) => (
            <Link
              to={path}
              className={cn(
                "block py-2",
                pathname === path && "font-extrabold"
              )}
              key={i}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="mb-3">
          <SearchButton />
        </div>
        <div>
          {user ? (
            <>
              <div>
                <Link to="/dashboard">
                  <button>Mein Bereich</button>
                </Link>
              </div>
              <div>
                  <button onClick={handleLogOut}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to="/signin">
                  <button>Login</button>
                </Link>
              </div>
              <div>
                <Link to="signup">
                  <button>Registrieren</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="absolute top-0 right-0 pointer-events-auto">
        <MenuButton
          onDark={onDark}
          active={open}
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
}
