import React from "react";

import { ScrollAnimation } from "../../scroll-animation";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Headerline } from "./headerline";
import { Text } from "./text";
import { Buildings } from "./buildings/buildings";
import { Continue } from "./continue";

export const StartChapter2: React.FC = () =>
(<ScrollAnimation>
    <div className="overflow-overlay">
        <Background/>
        <Sunrise/>
        <div className="relative">
            <Buildings />
        </div>
        <Text/>
        <Headerline/>
        <Continue/>

    </div>
</ScrollAnimation>);