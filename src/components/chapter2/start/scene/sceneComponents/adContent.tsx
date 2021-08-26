import React from "react";
import Plx from "react-plx";

import { IntroText } from "../../../../intro-text";
import { IntroTextData } from "../../../../intro-text/interfaces/interface";
import { QuizStatistics } from "../../../../quiz-statistics";
import { Quizinterface } from "../../../../quiz-statistics/interface/quiz-interface";
import { Statistics } from "../../../../statistics";
import { Sequence } from "../../interface/Chapter2Enum";
import { Chapter2Content, Stats } from "../../interface/interface";
import styles from "../../start.module.css";

export const AdContent: React.FC<{ chapter2Content: Chapter2Content }> = ({ chapter2Content }) => {
  return (
    <div className={`absolute ${styles.graffitiContent}`}>
      <IntroText introTextData={chapter2Content.introTextData} />
      {/*<Plx parallaxData={parallaxDataIntroText} animateWhenNotInViewport={true}>
        <IntroText introTextData={contentDataIntroText} />
      </Plx> */}
      {/*<Plx parallaxData={parallaxDataModule} animateWhenNotInViewport={true}>
        {sequence !== Sequence.Car ? (
          <div className="absolute w-full top-0">
            <Statistics tabs={statsDataModule.tabs} />
          </div>
        ) : (
          <QuizStatistics quiz={contentDataModule} />
        )}
      </Plx>*/}
    </div>
  );
};
