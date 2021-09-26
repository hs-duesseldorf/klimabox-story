import React from "react";
import Plx from "react-plx";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_massenvisualisierung.png";
import { IntroText } from "../../../../intro-text";
import { IntroTextData } from "../../../../intro-text/interfaces/interface";

export const Massenvisualisierung: React.FC<{
  parallaxData: [];
  massenvisualisierungBackground: [];
}> = ({ parallaxData, massenvisualisierungBackground }) => {
  const contentData: IntroTextData = {
    title: "50.000 Tonnen",
    text: "Feinstaub verursachen PKW-Fahrten jährlich",
    titleStyle: styles.mtitleStyle,
    textStyle: styles.mtextStyle,
    containerStyle: styles.mContainer
  };

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
        <img
          id="massenvisualsierung3"
          src={img}
          alt="massenvisualsierung3"
          className="absolute w-full"
          style={{ top: "9rem", zIndex: -1 }}
        />
      </Plx>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <div className={`absolute`}>
          <img id="massenvisualsierung" src={img} alt="massenvisualsierung" />
          <img className="absolute w-full" id="massenvisualsierung4" src={img} alt="massenvisualsierung4"
               style={{ top: "9rem" }} />
          <IntroText introTextData={contentData} />
        </div>
      </Plx>
    </div>
  );
};