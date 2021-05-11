import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link: React.FC<{ to: string }> = ({ to, children }) => (
  <RouterLink to={to} className="text-em1 hover:underline">
    {children}
  </RouterLink>
);

export const Footer: React.FC = () => (
  <div className="center-box 2xl:max-w-layout-max mt-20 mb-8 text-sm text-center xs:text-base sm:text-left sm:flex justify-between">
    <div>
      <div className="sm:inline-block sm:mr-3">
        <Link to="/impressum">Impressum</Link>
      </div>
      <div className="sm:inline-block">
        <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
      </div>
    </div>
    <div className="mt-6 text-gray-300 sm:m-0">
      &copy; {new Date().getFullYear()} Klimabox
    </div>
  </div>
);
