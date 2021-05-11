import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layout: React.FC<{ hasDarkBackground?: boolean }> = ({
  children,
  hasDarkBackground,
}) => (
  <>
    <Header onDark={hasDarkBackground} />
    {children}
    <Footer />
  </>
);
