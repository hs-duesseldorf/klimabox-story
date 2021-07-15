import React from "react";

export const Text: React.FC = () => (
  <div className="flex justify-center text-3xl xs:text-5xl sm:text-6xl">
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold morning">Morgens, 7 Uhr</div>
      <div className="font-light 2xl:mt-4">Zuhause</div>
    </div>
  </div>
);
