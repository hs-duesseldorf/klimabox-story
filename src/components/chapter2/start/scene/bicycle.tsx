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
import carImg from "../asset/kapitel2_auto_auswahl_effekt.png";

export const Bicycle: React.FC<{
  parallaxData: [];
  sequence: Sequence;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
}> = ({ parallaxData, sequence, setSequence, setViewHeight, setParallaxData }) => {

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
    setSequence(Sequence.Bicycle);
  };

  const topicSelection = sequence === Sequence.Question ?
    {
      containerStyle: { opacity: silloutteOpacity },
      containerClassName: styles.bicycleChoice,
      selection: [
        {
          style: { width: "100%" },
          imagePath: bycicleImg,
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
          mouseClickEventHandler: mouseClickEventHandlerFunction
        }
      ]
    } : undefined;

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
