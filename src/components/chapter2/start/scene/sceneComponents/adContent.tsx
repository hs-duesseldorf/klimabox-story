import React from "react";

import { IntroText } from "../../../../intro-text";
import { QuizStatistics } from "../../../../quiz-statistics";
import { Statistics } from "../../../../statistics";
import { Chapter2Content } from "../../interface/interface";
import styles from "../../start.module.css";

const useCheckHeight = (setshowQuiz: React.Dispatch<React.SetStateAction<boolean>>) => {
  React.useEffect(() => {
    function handleScroll() {
      const switchHeight = document.documentElement.clientHeight * 16;
      const scrollPosition = document.documentElement.scrollTop;
      setshowQuiz(switchHeight < scrollPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
};

export const AdContent: React.FC<{ chapter2Content: Chapter2Content }> = ({ chapter2Content }) => {
  const [showQuiz, setshowQuiz] = React.useState(false);
  const [showStats, setshowStats] = React.useState(false);
  useCheckHeight(setshowQuiz);
  const buttonHandle = () => {
    setshowStats(true);
  };
  return (
    <div className={`absolute ${styles.graffitiContent}`}>
      {showQuiz ?
        (<div>
          {showStats ? (<Statistics tabs={chapter2Content.stats.tabs} />) :
            (<div><QuizStatistics quiz={chapter2Content.quizData}></QuizStatistics>
              <button className={`${styles.showStatsButton}`} onClick={buttonHandle}>
                Weiter zur Statistik
              </button>
            </div>)}
        </div>)
        : (<IntroText introTextData={chapter2Content.introTextData} />)}
    </div>
  );
};
