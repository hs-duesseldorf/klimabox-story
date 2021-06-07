import React from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

import type { NavItem } from "..";

import { Button } from "../button";
import { SearchButton } from "../search-button";

export const DesktopNav: React.FC<{ items: NavItem[]; onDark?: boolean }> = ({
  items,
  onDark,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between">
      <div className="pb-1.5 text-xl sm:text-2xl text-right sm:flex items-end sm:-mx-3">
        {items.map(({ label, path }, i) => (
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
      <div className="flex items-center">
        <SearchButton />
        <Button onDark={onDark}>Einloggen</Button>
        <Button buttonOutline={true} onDark={onDark}>
          Registrieren
        </Button>
      </div>
    </div>
  );
};
