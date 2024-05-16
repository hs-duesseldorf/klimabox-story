import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";
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
