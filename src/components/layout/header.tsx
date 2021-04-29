import React from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="pt-6 pb-6 mb-3">
      <div className="center-box 2xl:max-w-layout-max">
        <div className="uppercase tracking-wider flex">
          <div className="text-3xl text-em1 pb-1 mr-6">
            <Link to="/" className="inline-block pr-4 relative font-semibold">
              <div className="absolute top-1 bottom-0 right-0 w-1 bg-em1" />
              Klimabox
            </Link>
          </div>
          <div className="pb-1 text-2xl flex items-end -mx-3">
            {[
              ["Blog", "/blog"],
              ["Story", "/story"],
            ].map(([label, path], i) => (
              <Link
                to={path}
                key={i}
                className={cn(
                  "hover:underline mx-3",
                  pathname.startsWith(path) && "font-extrabold"
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
