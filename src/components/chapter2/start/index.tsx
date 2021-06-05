import React from "react";

import { ScrollAnimation } from "../../scroll-animation";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Text } from "./text";
import { Scene } from "./scene/scene";
import { Continue } from "./continue";
import { QuestionComponent } from "./../../questions/index";
import {Question} from "./../../questions/interfaces/question";

export const StartChapter2: React.FC = () =>{

const test: Question ={
    title: "Wie lange steht ein Auto in Deutschland am Tag ungenutzt auf seinem Parkplatz",
    choices: [{
        text : "18 Stunden",
    },
    {
        text : "23 Stunden",
    },
    {
        text : "12 Stunden",
    },
    {
        text : "21 Stunden",
    },]
}

return (
    <div className = "text-white relative" >
        <Background/>
        <Sunrise/>
        <div className="w-full relative">
            <Scene/>
            <h1> hallo </h1>
        </div>
        <Text/>
        <Continue/>
    </div>
);
}