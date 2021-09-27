import React from "react";

import imageURL from "./newspaper.png";
import Plx from "react-plx";
import AudioIndex from "../../audio-player";

const Newspaper = () => {
    const parallaxData = [
        {
            start:3500,
            end:4200,
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                }
            ]
        },
      {
        start: 4400,
        end: 4600,
        properties: [
          {
            startValue: 1,
            endValue: 4,
            property: "scale"
          },
          {
            startValue: 0,
            endValue: 40,
            property: "rotate"
          },
          {
            startValue: 0,
            endValue: 1000,
            property: "translateX"
          }
        ]
      },
    ];
    return (
        <div>
            <Plx parallaxData={parallaxData}>
                <div className="pointer-events-none overflow-hidden w-100%">
                    <img src={imageURL} alt="Zeitung" className="absolute w-100%" />
                </div>
            </Plx>
            <div className="flex content-center">
                <AudioIndex/>
            </div>
        </div>
    );
  };
export { Newspaper };
  