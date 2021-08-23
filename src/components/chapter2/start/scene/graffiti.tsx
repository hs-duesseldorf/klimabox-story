import React from "react";

import Plx from "react-plx";

import styles from "../start.module.css";
import img from "../asset/kapitel2_graffiti.png";
import graffitiTextBackgroundImg from "../asset/kapitel2_graffiti_text_background.png";
import { IntroTextData } from "../../../intro-text/interfaces/interface";
import { Massenvisualisierung } from "./massenvisualisierung";
import { GraffitiContent } from "./graffitiContent";
import { Sequence } from "../interface/Chapter2Enum";
import { Stats } from "../interface/interface";
import { Quizinterface } from "./../../../quiz-statistics/interface/quiz-interface";

export const Graffiti: React.FC<{/*
  parallaxData: [];
  parallaxDataMassenvisualsierung: [];
  parallaxDataMassenvisualsierungBackground: [];
  parallaxDataIntroText: [];
  parallaxDataModule: [];
  contentDataIntroText: IntroTextData;
  contentDataModule: Quizinterface;
  statsData: Stats;
  sequence: Sequence; */
}> = ({
        /*
        parallaxData,
        parallaxDataMassenvisualsierung,
        parallaxDataMassenvisualsierungBackground,
        parallaxDataIntroText,
        parallaxDataModule,
        contentDataIntroText,
        contentDataModule,
        statsData,
        sequence,
        */
      }) => {
  return (
    <div className="absolute left-full w-full">
      {/*<Plx parallaxData={parallaxData} animateWhenNotInViewport={true}> */}
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
      {/*
        <GraffitiContent
          contentDataIntroText={contentDataIntroText}
          contentDataModule={contentDataModule}
          statsDataModule = {statsData}
          sequence={sequence}
          parallaxDataIntroText={parallaxDataIntroText}
          parallaxDataModule={parallaxDataModule}
        ></GraffitiContent>
        <Massenvisualisierung
          parallaxData={parallaxDataMassenvisualsierung}
          massenvisualisierungBackground={
            parallaxDataMassenvisualsierungBackground
          }
        /> */}
      {/* </Plx>*/}
    </div>
  );
};
