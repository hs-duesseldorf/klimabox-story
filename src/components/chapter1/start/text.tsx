import React from "react";

export const Text: React.FC = () => (
  <div className="flex justify-center text-3xl xs:text-5xl sm:text-6xl w-full">
    <div className="flex flex-col justify-center items-center">
      <div className="morning font-bold text-2xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-7xl">Morgens, 7 Uhr</div>
      <div className="font-light 2xl:mt-4  text-3xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-7xl">Zuhause</div>
    </div>
  </div>
);
