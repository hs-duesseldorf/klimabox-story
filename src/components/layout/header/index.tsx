import React from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";

export const Header: React.FC<{ onDark?: boolean }> = ({ onDark }) => {
  const { pathname } = useLocation();

  return (
    <div className="absolute w-full top-0 pt-6 pb-6 mb-3 z-10">
      <div className="center-box">
        <div
          className={cn(
            "uppercase tracking-wider flex items-center justify-between",
            onDark && "text-white"
          )}
        >
          <div className="flex items-center">
            <div
              className={cn(
                "text-3xl pb-1 mr-6",
                onDark ? "text-em1-light" : "text-em1"
              )}
            >
              <Link
                to="/"
                className="inline-block pr-10 relative font-semibold"
              >
                <div
                  className={cn(
                    "absolute top-1 bottom-0 right-0 w-1",
                    onDark ? "bg-em1-light" : "bg-em1"
                  )}
                />
                Klimabox
              </Link>
            </div>
            <div className="pb-1.5 text-xl sm:text-2xl text-right sm:flex items-end sm:-mx-3">
              {[
                ["Story", "/"],
                ["Archiv", "/blog"],
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
          <div className="flex items-center">
            <svg
              width="31.479"
              height="31"
              viewBox="0 0 31.479 31"
              className="w-16"
              fill="currentColor"
            >
              <path
                id="Icon_map-search"
                d="M24.474,20a12.022,12.022,0,0,0,1.8-6.325A12.323,12.323,0,0,0,13.858,1.44,12.327,12.327,0,0,0,1.44,13.673,12.323,12.323,0,0,0,13.862,25.9a12.483,12.483,0,0,0,6.422-1.774L28.73,32.44l4.189-4.127ZM13.86,21.24a7.635,7.635,0,0,1-7.683-7.559,7.684,7.684,0,0,1,15.366,0A7.641,7.641,0,0,1,13.86,21.24Z"
                transform="translate(-1.44 -1.44)"
              />
            </svg>
            <Button onDark={onDark}>Einloggen</Button>
            <Button buttonOutline={true} onDark={onDark}>
              Registrieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
