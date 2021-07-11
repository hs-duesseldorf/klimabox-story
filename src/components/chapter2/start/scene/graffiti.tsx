import React from "react";

import Plx from "react-plx";

import styles from "../start.module.css";
import img from "../asset/kapitel2_graffiti.png";
import graffitiTextBackgroundImg from "../asset/kapitel2_graffiti_text_background.png";
import { IntroText } from "../../../intro-text";
import { IntroTextData } from "../../../intro-text/interfaces/interface";
import { Massenvisualisierung } from "./massenvisualisierung";

export const Graffiti: React.FC<{
  parallaxData: [];
  contentData: IntroTextData;
  parallaxDataMassenvisualsierung: [];
  parallaxDataMassenvisualsierungBackground: [];
}> = ({ parallaxData, contentData, parallaxDataMassenvisualsierung, parallaxDataMassenvisualsierungBackground }) => {
  return (
    <div className="absolute left-full w-full">
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img
          src={img}
          alt="graffiti"
          className={`${styles.graffiti} absolute`}
        ></img>
        <img
          src={graffitiTextBackgroundImg}
          alt="graffitiBackground"
          className={`${styles.graffitiBackground} absolute`}
        />
        <IntroText introTextData={contentData} />
        <Massenvisualisierung
          parallaxData={parallaxDataMassenvisualsierung}
          massenvisualisierungBackground={
            parallaxDataMassenvisualsierungBackground
          }
        />
      </Plx>
    </div>
  );
};
