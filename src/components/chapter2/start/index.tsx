import React from "react";

import { ScrollAnimation } from "../../scroll-animation";

import {Background} from "./background";
import {Sunrise} from "./sunrise";
import {BuildingA} from "./buildingA";
import {BuildingB} from "./buildingB";
import {BuildingC} from "./buildingC";
import { Street } from './street';
import { Clue } from './clue';
import { Headerline } from "./headerline";
import {Text} from "./text";

export const StartChapter2: React.FC = () => 
(<ScrollAnimation>
    <div className="overflow-x-hidden">
        <Background/>
        <Sunrise/>
        <BuildingC/>
        <BuildingB/>
        <BuildingA/>
        <Street/>
        <Clue/>
    </div>
    <Headerline/>
    <Text/>

</ScrollAnimation>);