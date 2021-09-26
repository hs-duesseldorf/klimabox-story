import React from "react";

import { Question } from "./interfaces/question";

export const QuestionComponent: React.FC<{ question: Question }> = ({ question }) =>{

    return (
    <div>
        <h1>{ question.title }</h1>
        <div> 
            {question.choices.map(choice =>
            <div>
                <img src={ choice.imagePath } alt={choice.imagePath} />
                <p> {choice.text} </p>
            </div> )}
        </div>
    </div>)
}
