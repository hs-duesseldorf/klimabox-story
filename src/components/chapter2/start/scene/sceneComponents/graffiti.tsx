import React from "react";

import Plx from "react-plx";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_graffiti.png";
import werbetafelImg from "../../asset/kapitel2_werbetafel.png";
import graffitiTextBackgroundImg from "../../asset/kapitel2_graffiti_text_background.png";
import { IntroTextData } from "../../../../intro-text/interfaces/interface";
import { Massenvisualisierung } from "./massenvisualisierung";
import { Sequence } from "../../interface/Chapter2Enum";
import { Chapter2Content, Stats } from "../../interface/interface";
import { Quizinterface } from "../../../../quiz-statistics/interface/quiz-interface";
import { AdContent } from "./adContent";

export const Graffiti: React.FC<{
  chapter2Content: Chapter2Content;
  parallaxDataMassenvisualsierung: [];
  parallaxDataMassenvisualsierungBackground: [];
  /*
  parallaxData: [];
  parallaxDataIntroText: [];
  parallaxDataModule: [];
  contentDataIntroText: IntroTextData;
  contentDataModule: Quizinterface;
  statsData: Stats;
  sequence: Sequence; */
}> = ({
        chapter2Content,
        parallaxDataMassenvisualsierung,
        parallaxDataMassenvisualsierungBackground
        /*
        parallaxData,

        parallaxDataIntroText,
        parallaxDataModule,
        contentDataIntroText,
        contentDataModule,
        statsData,
        sequence,
        */
      }) => {
  return (
    <div className="absolute w-full">
      <img
        src={img}
        alt="graffiti"
        className={`${styles.graffiti} absolute`}
      ></img>

      <img src={werbetafelImg} alt="werbetafel" className={`absolute ${styles.werbetafel} `}></img>

      <AdContent chapter2Content={chapter2Content}></AdContent>
      <Massenvisualisierung
        parallaxData={parallaxDataMassenvisualsierung}
        massenvisualisierungBackground={
          parallaxDataMassenvisualsierungBackground
        }
      />
    </div>
  );
};
