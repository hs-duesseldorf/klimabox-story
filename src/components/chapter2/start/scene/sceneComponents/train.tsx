import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";
import { TopicSelection } from "../../../../topic-selection/interfaces/selection";
import { Sequence } from "../../interface/Chapter2Enum";

import { Selection } from "../../../../topic-selection";
import trainImg from "../../asset/kapitel2_bahn_auswahl_effekt.png";
import { Quizinterface } from "../../../../quiz-statistics/interface/quiz-interface";
import { getParallaxData } from "../../animationParallaxData";
import { getContentData, getStatsData } from "../../content";
import { getQuiz } from "../../quizData";
import { Stats } from "../../interface/interface";

export const Train: React.FC<{
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
        Sequence.Train,
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      )
    );
    setSequence(Sequence.Train);
  };

  const topicSelection = sequence === Sequence.Question ?
    {
      containerStyle: { opacity: silloutteOpacity },
      selection: [
        {
          imagePath: trainImg,
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
          mouseClickEventHandler: mouseClickEventHandlerFunction
        }
      ]
    } : undefined;

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