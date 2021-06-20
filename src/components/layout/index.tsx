import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";
import { SideNav } from "./side-nav";

type LayoutProps = {
  hasDarkBackground?: boolean;
  chapter?: number;
};
export const Layout: React.FC<LayoutProps> = ({
  hasDarkBackground,
  chapter,
  children,
}) => {
  return (
    <div>
      <Header onDark={hasDarkBackground} />
      {children}
      {chapter != null && (
        <SideNav
          chapter={chapter}
          hasDarkBackground={hasDarkBackground}
        ></SideNav>
      )}
      <Footer />
    </div>
  );
};
