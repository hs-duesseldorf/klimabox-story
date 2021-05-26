import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";
import { SideNav} from "./side-nav";

export const Layout: React.FC<{ hasDarkBackground?: boolean }> = ({
  children,
  hasDarkBackground,
}) => (
  <>
    <Header onDark={hasDarkBackground} />
    {children}
    <SideNav></SideNav>
    <Footer />

  </>
);
