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
  parallaxDataModule: [];
  sequence: Sequence;
}> = ({
  contentDataIntroText,
  parallaxDataIntroText,
  contentDataModule,
  parallaxDataModule,
  sequence,
}) => {
  const statisticsProps: Stats = {
    content: [
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
    ],
  };

  return (
    <div className={`absolute ${styles.graffitiContent}`}>
      <Plx parallaxData={parallaxDataIntroText} animateWhenNotInViewport={true}>
        <IntroText introTextData={contentDataIntroText} />
      </Plx>
      <Plx parallaxData={parallaxDataModule} animateWhenNotInViewport={true}>
        {sequence !== Sequence.Car ? (
          <Statistics tabs={statisticsProps.content} />
        ) : (
          <QuizStatistics quiz={contentDataModule} />
        )}
      </Plx>
    </div>
  );
};
