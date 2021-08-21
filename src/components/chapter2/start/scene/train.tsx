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

export const Train: React.FC<{}> = ({}) => {
  return (
    <div id="train" className={`${styles.train} absolute -top-96`}>
      <img src={img} alt="train" className="absolute" />
    </div>
  );
};
