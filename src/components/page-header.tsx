import React from "react";

export const PageHeader: React.FC = ({ children }) => (
  <div className="center-box">
    <h1 className="text-4xl mb-4 font-bold">{children}</h1>
  </div>
);
