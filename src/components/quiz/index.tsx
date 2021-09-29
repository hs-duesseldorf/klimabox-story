import React from "react";

import wrongImg from "./asset/Wrong.png";
import questionMarkImg from "./asset/Questionmark.png";
import { QuizInterface } from "./interface/quiz-interface";
import correctImg from "./asset/Correct.png";

export const Quiz: React.FC<{ quiz: QuizInterface }> = ({ quiz }) => {
  const [image, setImage] = React.useState(questionMarkImg);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, answer) => {
    const spanElement = e.currentTarget.children[0] as HTMLSpanElement;

    if (answer) {
      e.currentTarget.style.background = "#197EB7";
      spanElement.style.color = "white";
      setImage(correctImg);
    } else {
      e.currentTarget.style.background = "#E78182";
      spanElement.style.color = "white";
      setImage(wrongImg);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-transparent w-2/3 p-12">
        <div className="flex mb-6 md:mb-0">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold w-4/5">{quiz.question}</h2>
          <img
            className="w-auto h-16 md:h-32 max-w-32"
            alt="logo"
            src={image}
          />
        </div>
        {quiz.answers.map((q, i) =>
          <div className="flex flex-col md:mr-48" key={i}>
            <div
              className="bg-bg-alt hover:bg-em1 hover:text-white border-gray-300 shadow-md rounded-round p-3 mb-3 text-lg cursor-pointer"
              onClick={(e) => {
                clickHandler(e, q.correctAnswer);
              }}><span className="pl-4">{q.text}</span></div>
          </div>
        )}
      </div>
    </>
  );
};
