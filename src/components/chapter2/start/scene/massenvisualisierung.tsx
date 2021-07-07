import React from "react";
import Plx from "react-plx";

import styles from "../start.module.css";
import img from "../asset/kapitel2_massenvisualisierung.png";
import { IntroText } from "../../../intro-text";
import { IntroTextData } from "./../../../intro-text/interfaces/interface";

export const Massenvisualisierung: React.FC<{ parallaxData: any }> = ({
  parallaxData,
}) => {
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
      top: "72rem",
      backgroundColor: "rgba(0, 0, 0,0.5)",
      width: "24%",
      height: "10rem",
      left: "24%",
    },
  };
  return (
    <div className={` ${styles.massenvisualsierung}  absolute w-full `}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img
          id="massenvisualsierung"
          src={img}
          alt="massenvisualsierung"
          className={`absolute`}
        />
        <IntroText introTextData={contentData} />
      </Plx>
    </div>
  );
};
