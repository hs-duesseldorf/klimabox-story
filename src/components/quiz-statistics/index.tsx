import React, { RefObject } from "react";

import wrongImg from "./asset/Wrong.png";
import questionMarkImg from "./asset/Questionmark.png";
import { Quizinterface } from "./interface/quiz-interface";
import styles from "./start.module.css";

export const QuizStatistics:React.FC<{quiz: Quizinterface}> = ({quiz}) => {
  const [image, setImage] = React.useState(questionMarkImg);
  const allRightAnswers = quiz.choices.reduce((count, currentValue ) => (currentValue.answere? count+1 : count), 0 );
  const questionRef = React.useRef(null);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, choice) => {
    if(choice.answere){
      e.currentTarget.style.background = "green";
      choice.revealed = true;
    }else{
      const childElement = (questionRef as RefObject<HTMLDivElement>).current!.children;
      quiz.choices.forEach( (choice, i) => {
        (childElement.item(i) as HTMLDivElement).style.background = choice.answere? "red" : "grey";
      } );
    }
    const revealed =  quiz.choices.reduce((count, currentValue ) => (currentValue.answere && currentValue.revealed? count+1 : count), 0 )
    if(allRightAnswers === revealed){
      setImage(wrongImg);
    }

  }

  return (
    <div className="container absolute" style = {{ top: 0,
      width: "160%"}}>
      <div className="title mb-4">
        <p
          className="font-bold text-lg"
          style={{ width: "55%", left: "55%", top: 0, color: "black" }}
        >
          Wie lange steht ein Auto in Deutschland am Tag ungenutzt auf seinem
          Parkplatz
        </p>
        <img
          className="absolute"
          alt="logo"
          src={image}
          style={{ top: 0, left: "55%", width: "7%" }}
        ></img>
      </div>
      <div ref = {questionRef} className={`absolute mt-6 ${styles.quiz}`}>
        {quiz.choices.map((choice, i) => (
          <div
            onClick = { (e) => {clickHandler(e, choice)}}
            className={` ${styles.question} rounded-lg shadow-lg text-base px-4 py-2 mb-4`}
            key={i}
          >
            <span>{choice.choice}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
