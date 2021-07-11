import React from "react";
import Plx from "react-plx";

import styles from "../start.module.css";
import img from "../asset/kapitel2_massenvisualisierung.png";
import { IntroText } from "../../../intro-text";
import { IntroTextData } from "./../../../intro-text/interfaces/interface";
import { Statistics } from "../../../statistics";

export const Massenvisualisierung: React.FC<{
  parallaxData: [];
  massenvisualisierungBackground: [];
}> = ({ parallaxData, massenvisualisierungBackground }) => {
  const contentData: IntroTextData = {
    title: "50.000 Tonnen",
    text: "Feinstaub verursachen PKW-Fahrten jährlich",
    titleStyle: {
      textAlign: "center",
      fontSize: "35px",
      marginTop: "0.5%",
      fontWeight: "bold",
    },
    textStyle: {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      margin: "0px 12% 6%",
    },
    containerStyle: {
      position: "absolute",
      top: "90rem",
      width: "24%",
      height: "10rem",
      left: "23%",
    },
  };

  const statisticsProps: [
    {
      title: string | JSX.Element;
      unit: string | JSX.Element;
      data: [
        {
          textureURL: string;
          label: string | JSX.Element;
          value: number;
          bgIsDark?: boolean;
        }
      ];
    }
  ] = [
    {
      title: (
        <>
          CO<sub>2</sub>
        </>
      ),
      unit: (
        <>
          kg CO<sub>2</sub>
        </>
      ),
      data: [
        {
          textureURL: "meatTexture",
          label: "1kg Rindfleisch",
          value: 120,
          bgIsDark: true,
        },
      ],
    },
  ];

  return (
    <div className={` ${styles.massenvisualsierung}  absolute w-full `}>
      <Plx
        parallaxData={massenvisualisierungBackground}
        animateWhenNotInViewport={true}
      >
        <img
          id="massenvisualsierung2"
          src={img}
          alt="massenvisualsierung2"
          className="absolute w-full"
          style={{ top: "1rem", zIndex: -1 }}
        />
      </Plx>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <div className={`absolute`}>
          <img id="massenvisualsierung" src={img} alt="massenvisualsierung" />
          <IntroText introTextData={contentData} />
        </div>
      </Plx>
    </div>
  );
};
