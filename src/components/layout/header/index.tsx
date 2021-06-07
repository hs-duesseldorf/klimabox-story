import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { DesktopNav } from "./desktop-nav";

export type NavItem = {
  path: string;
  label: string;
};

const items: NavItem[] = [
  { path: "/", label: "Story" },
  { path: "/blog", label: "Archiv" },
];

export const Header: React.FC<{ onDark?: boolean }> = ({ onDark }) => (
  <div className="absolute w-full top-0 pt-6 pb-6 mb-3 z-10">
    <div className="center-box">
      <div className={cn("uppercase tracking-wider", onDark && "text-white")}>
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
          <div className="flex-1">
            <DesktopNav items={items} onDark={onDark} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
