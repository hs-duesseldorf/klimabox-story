import React, { RefObject } from "react";

import wrongImg from "./asset/Wrong.png";
import questionMarkImg from "./asset/Questionmark.png";
import { Quizinterface } from "./interface/quiz-interface";
import correctImg from "./asset/Correct.png";

export const QuizStatistics: React.FC<{ quiz: Quizinterface }> = ({ quiz }) => {
  const [image, setImage] = React.useState(questionMarkImg);
  const allRightAnswers = quiz.choices.reduce((count, currentValue) => (currentValue.answere ? count + 1 : count), 0);
  const questionRef = React.useRef(null);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, choice) => {
    if (choice.answere) {
      e.currentTarget.style.background = "green";
      choice.revealed = true;
      const revealed = quiz.choices.reduce((count, currentValue) => (currentValue.answere && currentValue.revealed ? count + 1 : count), 0);
      if (allRightAnswers === revealed) {
        setImage(correctImg);
      }
    } else {
      const childElement = (questionRef as RefObject<HTMLDivElement>).current!.children;
      quiz.choices.forEach((choice, i) => {
        (childElement.item(i) as HTMLDivElement).style.background = choice.answere ? "red" : "grey";
      });
      setImage(wrongImg);
    }
  };

  return (
    <div className={`${quiz.quizContainerStyle}`}>
      <div className={`${quiz.quizTitleStyle}`}>
        {quiz.title}
        <img
          className={`${quiz.quizQuestionmarkStyle}`}
          alt="logo"
          src={image}
        />
      </div>
      <div ref={questionRef} className={`${quiz.quizStyle}`}>
        {quiz.choices.map((choice, i) => (
          <div
            onClick={(e) => {
              clickHandler(e, choice);
            }}
            className={` ${quiz.quizQuestionStyle} rounded-lg shadow-lg`}
            key={i}
          >
            {choice.choice}
          </div>
        ))}
      </div>
    </div>
  );
};
