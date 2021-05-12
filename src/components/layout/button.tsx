import React from "react";

export const Button: React.FC<{ primaryButton?: boolean, onClick?: () => void }> =
  ({
     primaryButton = false, onClick, children
   }) => (
    <button onClick={onClick}
            className={`${primaryButton ? "uppercase w-full px-6 focus:outline-none" : "uppercase w-full p-2 border-2 border-white rounded-2xl focus:outline-none hover:text-black hover:bg-white"}`}>{children}</button>
  );