import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_fahrrad_auswahl.png";
import bycicleImg from "../asset/kapitel2_fahrrad_auswahl_effekt.png";
import Plx from "react-plx";
import { Sequence } from "../interface/Chapter2Enum";
import { Selection } from "../../../topic-selection";
import { TopicSelection } from "../../../topic-selection/interfaces/selection";
import { Quizinterface } from "../../../quiz-statistics/interface/quiz-interface";
import { getParallaxData } from "../animationParallaxData";
import { getContentData, getStatsData } from "../content";
import { getQuiz } from "../quizData";

import { Stats } from "../interface/interface";

export const Bicycle: React.FC<{
  sequence: Sequence;
  parallaxData: [];
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  setContentData: React.Dispatch<React.SetStateAction<any>>;
  setQuizData: React.Dispatch<React.SetStateAction<Quizinterface>>;
  setStatsData: React.Dispatch<React.SetStateAction<Stats>>;
}> = ({  
  sequence,
  parallaxData,
  setViewHeight,
  setParallaxData,
  setContentData,
  setSequence,
  setQuizData,
  setStatsData}) => {

  const [silloutteOpacity, setSilloutteOpacity] = React.useState(0.1);
  const mouseEnterHandlerFunction = () => setSilloutteOpacity(1);
  const mouseLeaveHandlerFunction = () => setSilloutteOpacity(0.1);
  const mouseClickEventHandlerFunction = () => {
    setViewHeight("2000vh");
    setParallaxData(
      getParallaxData(
        Sequence.Bicycle,
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      )
    );
    setContentData(getContentData(Sequence.Bicycle));
    setSequence(Sequence.Bicycle);
    setQuizData(getQuiz(Sequence.Bicycle));
    setStatsData(getStatsData(Sequence.Bicycle));
  };

  let topicSelection: TopicSelection | undefined = undefined;
  switch (sequence) {
    case Sequence.Question:
      topicSelection = {
        containerStyle: {
          opacity: silloutteOpacity,
          position: "absolute",
          left: "-14%",
          top: "-1.5rem",
          width: "128%",
          zIndex: 2,
        },
        selection: [
          {
            imagePath: bycicleImg,
            mouseEnterEventHandler: mouseEnterHandlerFunction,
            mouseLeaveEventHandler: mouseLeaveHandlerFunction,
            mouseClickEventHandler: mouseClickEventHandlerFunction,
          },
        ],
      };
      break;
  }

  return (
    <div id="bicycle" className={`${styles.bicycle} absolute -top-96`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={img} alt="Bicycle" className="absolute" />
        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};
