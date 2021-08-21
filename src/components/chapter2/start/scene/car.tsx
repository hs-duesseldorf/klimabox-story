import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_auto_auswahl.png";
import Plx from "react-plx";
import { TopicSelection } from "../../../topic-selection/interfaces/selection";
import { Sequence } from "../interface/Chapter2Enum";

import { Selection } from "../../../topic-selection";
import carImg from "../asset/kapitel2_auto_auswahl_effekt.png";
import { getParallaxData } from "../animationParallaxData";
import { getContentData, getStatsData } from "./../content";
import { Quizinterface } from "./../../../quiz-statistics/interface/quiz-interface";
import { getQuiz } from "../quizData";
import { Stats } from "../interface/interface";

export const Car: React.FC<{}> = ({}) => {
  
  return (
    <div className={`${styles.car} absolute -top-96 `}>
      <img id="car" src={img} alt="car" className="absolute" />
    </div>
  );
};
