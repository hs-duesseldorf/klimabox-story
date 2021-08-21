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

export const Bicycle: React.FC<{}> = ({}) => {
  return (
    <div id="bicycle" className={`${styles.bicycle} absolute -top-96`}>
      <img src={img} alt="Bicycle" className="absolute" />
    </div>
  );
};
