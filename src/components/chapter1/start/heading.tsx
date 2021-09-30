import React from "react";
import Plx from "react-plx";

export const Heading: React.FC = () => {

  const parallaxData = [
    {
      start: 0,
      end: 400,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];

  return (
    <Plx parallaxData = {parallaxData}>
      <div className="center-box pt-40 2xl:pt-56">
        <h1 className={`font-bold uppercase text-2xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-5xl`}>
          Vom Esstisch
          <br />
          in die Arktis
        </h1>
      </div>
    </Plx>
  );
};
