import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";
import { TopicSelection } from "../../../topic-selection/interfaces/selection";
import { Sequence } from "../interface/Chapter2Enum";

import { Selection } from "../../../topic-selection";
import trainImg from "../asset/kapitel2_bahn_auswahl_effekt.png";
import { Quizinterface } from "../../../quiz-statistics/interface/quiz-interface";
import { getParallaxData } from "../animationParallaxData";
import { getContentData, getStatsData } from "../content";
import { getQuiz } from "../quizData";
import { Stats } from "../interface/interface";

export const Train: React.FC<{
  sequence: Sequence;
  parallaxData: [];
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  setContentData: React.Dispatch<React.SetStateAction<any>>;
  setQuizData: React.Dispatch<React.SetStateAction<Quizinterface>>;
  setStatsData:  React.Dispatch<React.SetStateAction<Stats>>;
}> = ({ sequence,
  parallaxData,
  setViewHeight,
  setParallaxData,
  setContentData,
  setSequence,
  setQuizData,
  setStatsData
  }) => {
  
  const [silloutteOpacity, setSilloutteOpacity] = React.useState(0.1);
  const mouseEnterHandlerFunction = () => setSilloutteOpacity(1);
  const mouseLeaveHandlerFunction = () => setSilloutteOpacity(0.1);
  const mouseClickEventHandlerFunction = () => {
    setViewHeight("2000vh");
    setParallaxData(
      getParallaxData(
        Sequence.Train,
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      )
    );
    setContentData(getContentData(Sequence.Train));
    setSequence(Sequence.Train);
    setQuizData(getQuiz(Sequence.Train));
    setStatsData(getStatsData(Sequence.Train));
  };

  let topicSelection: TopicSelection | undefined = undefined;
  switch (sequence) {
    case Sequence.Question:
      topicSelection = {
        selection: [
          {
            imagePath: trainImg,
            mouseEnterEventHandler: mouseEnterHandlerFunction,
            mouseLeaveEventHandler: mouseLeaveHandlerFunction,
            mouseClickEventHandler: mouseClickEventHandlerFunction,
          },
        ],
        containerStyle: {
          width: "99%",
          opacity: silloutteOpacity,
          position: "absolute",
        },
      };
      break;
    case Sequence.Intro:
      topicSelection = undefined;
      break;
  }

  return (
    <div id="train" className={`${styles.train} absolute -top-96`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={img} alt="train" className="absolute" />

        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};
