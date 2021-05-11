import React from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC<{ onDark?: boolean }> = ({ onDark }) => {
  const { pathname } = useLocation();

  return (
    <div className="absolute w-full top-0 pt-6 pb-6 mb-3 z-10">
      <div className="center-box 2xl:max-w-layout-max">
        <div className="uppercase tracking-wider flex">
          <div
            className={cn(
              "text-3xl pb-1 mr-6",
              onDark ? "text-em1-light" : "text-em1"
            )}
          >
            <Link to="/" className="inline-block pr-4 relative font-semibold">
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
              "pb-1.5 text-2xl flex items-end -mx-3",
              onDark && "text-white"
            )}
          >
            {[
              ["Story", "/"],
              ["Blog", "/blog"],
            ].map(([label, path], i) => (
              <Link
                to={path}
                key={i}
                className={cn(
                  "hover:underline mx-3",
                  pathname === path && "font-extrabold"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
