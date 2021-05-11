import React from "react";

import { Header } from "./header";

export const Layout: React.FC<{ hasDarkBackground?: boolean }> = ({
  children,
  hasDarkBackground,
}) => (
  <>
    <Header onDark={hasDarkBackground} />
    {children}
  </>
);
