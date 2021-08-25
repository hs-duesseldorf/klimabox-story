import React from "react";
import Plx from "react-plx";

import { Graffiti } from "./graffiti";
import { BuildingD } from "./buildingD";
import { EndScreen } from "./endScreen";
import { Train } from "./sceneComponents/train";
import { Bicycle } from "./sceneComponents/bicycle";
import { Car } from "./sceneComponents/car";
import { Sequence } from "../interface/Chapter2Enum";
import { EndscreenStreet } from "./endScreenStreet";
import { Human } from "./human";
import { StreetLamp } from "./streetlamp";
import { Quizinterface } from "./../../../quiz-statistics/interface/quiz-interface";
import { Stats } from "../interface/interface";
import img from "../asset/kapitel2_graffiti.png";
import styles from "../start.module.css";

import graffitiTextBackgroundImg from "../asset/kapitel2_graffiti_text_background.png";
import { IntroScene } from "./introScene";
import { BlackCut } from "./sceneComponents/blackCut";

export const Scene: React.FC<{
  sequence: Sequence;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  parallaxData: any;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
}> = ({
        sequence,
        setSequence,
        setViewHeight,
        parallaxData,
        setParallaxData
      }) => {

  return (
    <div>
      <IntroScene parallaxData={null}></IntroScene>
      <Train sequence={sequence}
             parallaxData={parallaxData.trainData}
             setViewHeight={setViewHeight}
             setParallaxData={setParallaxData}
             setSequence={setSequence} />
      <Bicycle
        sequence={sequence}
        parallaxData={parallaxData.bicylceData}
        setViewHeight={setViewHeight}
        setParallaxData={setParallaxData}
        setSequence={setSequence} />

      <Car sequence={sequence}
           parallaxData={parallaxData.carData}
           setViewHeight={setViewHeight}
           setParallaxData={setParallaxData}
           setSequence={setSequence} />

      <BlackCut></BlackCut>
    </div>
  );
};
