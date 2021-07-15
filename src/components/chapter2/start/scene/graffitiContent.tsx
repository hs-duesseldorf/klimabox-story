import React from "react";
import Plx from "react-plx";

import { IntroText } from "../../../intro-text";
import { IntroTextData } from "../../../intro-text/interfaces/interface";
import { QuizStatistics } from "../../../quiz-statistics";
import { Quizinterface } from "../../../quiz-statistics/interface/quiz-interface";
import { Statistics } from "../../../statistics";
import { Sequence } from "../interface/Chapter2Enum";
import { Stats } from "../interface/interface";
import styles from "../start.module.css";

export const GraffitiContent: React.FC<{
  contentDataIntroText: IntroTextData;
  parallaxDataIntroText: [];
  contentDataModule: Quizinterface;
  statsDataModule: Stats;
  parallaxDataModule: [];
  sequence: Sequence;
}> = ({
  contentDataIntroText,
  parallaxDataIntroText,
  contentDataModule,
  statsDataModule,
  parallaxDataModule,
  sequence,
}) => {

  return (
    <div className={`absolute ${styles.graffitiContent}`}>
      <Plx parallaxData={parallaxDataIntroText} animateWhenNotInViewport={true}>
        <IntroText introTextData={contentDataIntroText} />
      </Plx>
      <Plx parallaxData={parallaxDataModule} animateWhenNotInViewport={true}>
        {sequence !== Sequence.Car ? (
          <div className="absolute w-full top-0">
            <Statistics tabs={statsDataModule.tabs} />
          </div>
        ) : (
          <QuizStatistics quiz={contentDataModule} />
        )}
      </Plx>
    </div>
  );
};
