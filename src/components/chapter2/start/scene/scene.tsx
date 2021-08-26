import React from "react";
import Plx from "react-plx";

import { Graffiti } from "./sceneComponents/graffiti";
import { BuildingD } from "./sceneComponents/buildingD";
import { EndScreen } from "./endScreen";
import { Train } from "./sceneComponents/train";
import { Bicycle } from "./sceneComponents/bicycle";
import { Car } from "./sceneComponents/car";
import { Sequence } from "../interface/Chapter2Enum";
import { EndscreenStreet } from "./endScreenStreet";
import { Human } from "./human";
import { StreetLamp } from "./streetlamp";
import { Quizinterface } from "./../../../quiz-statistics/interface/quiz-interface";
import { Chapter2Content, Stats } from "../interface/interface";
import img from "../asset/kapitel2_graffiti.png";
import styles from "../start.module.css";

import graffitiTextBackgroundImg from "../asset/kapitel2_graffiti_text_background.png";
import { IntroScene } from "./introScene";
import { BlackCut } from "./sceneComponents/blackCut";
import { Street } from "./street";

export const Scene: React.FC<{
  sequence: Sequence;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  parallaxData: any;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  chapter2Content: Chapter2Content;
  setChapter2Content: React.Dispatch<React.SetStateAction<Chapter2Content>>;
}> = ({
        sequence,
        setSequence,
        setViewHeight,
        parallaxData,
        setParallaxData,
        chapter2Content,
        setChapter2Content
      }) => {

  return (
    <div>
      <Plx parallaxData={parallaxData.scene} animateWhenNotInViewport={true}>
        <IntroScene chapter2Content={chapter2Content} parallaxData={parallaxData.backgroundData}
                    parallaxDataMassenvisualsierungBackground={parallaxData.massenvisualisierungBackground}
                    parallaxDataMassenvisualsierung={parallaxData.massenvisualisierung}></IntroScene>
        <Street />
        <Train sequence={sequence}
               parallaxData={parallaxData.trainData}
               setViewHeight={setViewHeight}
               setParallaxData={setParallaxData}
               setSequence={setSequence}
               setChapter2Content={setChapter2Content} />

        <Bicycle
          sequence={sequence}
          parallaxData={parallaxData.bicylceData}
          setViewHeight={setViewHeight}
          setParallaxData={setParallaxData}
          setSequence={setSequence}
          setChapter2Content={setChapter2Content} />

        <Car sequence={sequence}
             parallaxData={parallaxData.carData}
             setViewHeight={setViewHeight}
             setParallaxData={setParallaxData}
             setSequence={setSequence}
             setChapter2Content={setChapter2Content} />
        <BlackCut parallaxData={parallaxData.blackCutData}></BlackCut>
      </Plx>
    </div>
  );
};
