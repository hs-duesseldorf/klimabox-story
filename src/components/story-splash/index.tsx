import React from "react";

import { Arrow } from "./arrow";

import backgroundURL from "./background.png";

export const StorySplash: React.FC = () => (
  <div className="relative">
    <div className="bg-black responsive-inset pointer-events-none">
      <img
        src={backgroundURL}
        alt="Hintergrundbild der Story Seite"
        className="w-full h-full opacity-90 object-cover select-none"
      />
    </div>
    <div className="absolute inset-x-0 top-0 h-32 2xl:h-48 bg-gradient-to-b from-black opacity-60 pointer-events-none" />
    <div className="relative pt-32 pb-16 xs:pt-40 xs:pb-20 2xl:pt-48 2xl:pb-24">
      <div className="center-box 2xl:max-w-layout-max">
        <h1
          className="text-white font-bold text-3xl xs:text-4xl xs:leading-snug max-w-md 2xl:max-w-xl 2xl:leading-snug 2xl:text-5xl"
          style={{ textShadow: "0 2px 5px black" }}
        >
          Sieh, wie die Klimakrise unsere Welt verändert.
          <br />
          Und was wir dagegen tun können.
        </h1>
        <div className="mt-6">
          <Arrow />
        </div>
      </div>
    </div>
  </div>
);
