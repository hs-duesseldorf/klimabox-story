import React from "react";
import Plx from "react-plx";

import { Street } from "./street";
import { BuildingC } from "./buildingC";
import { BuildingB } from "./buildingB";
import { BuildingA } from "./buildingA";
import { Graffiti } from "./graffiti";
import { BuildingD } from "./buildingD";
import { EndScreen } from "./endScreen";
import { Train } from "./train";
import { Bicycle } from "./bicycle";
import { Car } from "./car";
import { Sequence } from "../interface/Chapter2Enum";
import { EndscreenStreet } from "./endScreenStreet";
import { Human } from "./human";
import { StreetLamp } from "./streetlamp";
import { Quizinterface } from "./../../../quiz-statistics/interface/quiz-interface";
import { Stats } from "../interface/interface";

export const Scene: React.FC<{
  sequence: Sequence;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  parallaxData: any;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  contentData: any;
  setContentData: React.Dispatch<React.SetStateAction<any>>;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  quizData: Quizinterface;
  setQuizData: React.Dispatch<React.SetStateAction<Quizinterface>>;
  statsData: Stats;
  setStatsData: React.Dispatch<React.SetStateAction<Stats>>;
}> = ({
  sequence,
  setViewHeight,
  parallaxData,
  setParallaxData,
  contentData,
  setContentData,
  setSequence,
  quizData,
  setQuizData,
  statsData,
  setStatsData,
}) => {
  return (
    <div>
      <Plx parallaxData={parallaxData.scene} animateWhenNotInViewport={true}>
        <BuildingC parallaxData={parallaxData.backgroundData} />
        <BuildingB parallaxData={parallaxData.backgroundData} />
        <BuildingA parallaxData={parallaxData.backgroundData} />
        <Graffiti
          parallaxData={parallaxData.backgroundData}
          parallaxDataMassenvisualsierung={parallaxData.massenvisualisierung}
          parallaxDataMassenvisualsierungBackground={
            parallaxData.massenvisualisierungBackground
          }
          parallaxDataIntroText={parallaxData.parallaxDataIntroText}
          parallaxDataModule={parallaxData.parallaxDataModule}
          contentDataIntroText={contentData.introTextData}
          contentDataModule={quizData}
          statsData={statsData}
          sequence={sequence}
        />
        <BuildingD parallaxData={parallaxData.backgroundData} />
        <EndScreen parallaxData={parallaxData.backgroundData} />
        <EndscreenStreet parallaxData={parallaxData.backgroundData} />
        <Human parallaxData={parallaxData.backgroundData} />
        <StreetLamp parallaxData={parallaxData.backgroundData} />

        <Train
          sequence={sequence}
          parallaxData={parallaxData.trainData}
          setViewHeight={setViewHeight}
          setParallaxData={setParallaxData}
          setContentData={setContentData}
          setSequence={setSequence}
          setQuizData={setQuizData}
          setStatsData={setStatsData}
        />

        <Bicycle
          sequence={sequence}
          parallaxData={parallaxData.bicylceData}
          setViewHeight={setViewHeight}
          setParallaxData={setParallaxData}
          setContentData={setContentData}
          setSequence={setSequence}
          setQuizData={setQuizData}
          setStatsData={setStatsData}
        />
        <Car
          sequence={sequence}
          parallaxData={parallaxData.carData}
          setViewHeight={setViewHeight}
          setParallaxData={setParallaxData}
          setContentData={setContentData}
          setSequence={setSequence}
          setQuizData={setQuizData}
          setStatsData={setStatsData}
        />

        <Street parallaxData={parallaxData.street} />
      </Plx>
    </div>
  );
};
