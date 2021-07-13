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

export const Scene: React.FC<{
  sequence: Sequence;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  parallaxData: any;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  contentData: any;
  setContentData: React.Dispatch<React.SetStateAction<any>>;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
}> = ({
  sequence,
  setViewHeight,
  parallaxData,
  setParallaxData,
  contentData,
  setContentData,
  setSequence
}) => {
  return (
    <div>
      <Plx parallaxData={parallaxData.scene} animateWhenNotInViewport={true}>
        <BuildingC parallaxData={parallaxData.backgroundData} />
        <BuildingB parallaxData={parallaxData.backgroundData} />
        <BuildingA parallaxData={parallaxData.backgroundData} />
        <Graffiti
          parallaxData={parallaxData.backgroundData} 
          parallaxDataMassenvisualsierung = {parallaxData.massenvisualisierung}
          parallaxDataMassenvisualsierungBackground = {parallaxData.massenvisualisierungBackground}
          parallaxDataIntroText = {parallaxData.parallaxDataIntroText}
          parallaxDataModule = {parallaxData.parallaxDataModule}
          contentDataIntroText ={contentData.introTextData}
          contentDataModule = {null}
          sequence = {sequence}
        />
        <BuildingD parallaxData={parallaxData.backgroundData} />
        <EndScreen parallaxData={parallaxData.backgroundData} />

        <Train sequence={sequence} parallaxData={parallaxData.trainData} />
        <Bicycle sequence={sequence} parallaxData={parallaxData.bicylceData} />
        <Car
          sequence={sequence}
          parallaxData={parallaxData.carData}
          setViewHeight={setViewHeight}
          setParallaxData={setParallaxData}
          setContentData={setContentData}
          setSequence = {setSequence}
        />

        <Street />
      </Plx>
    </div>
  );
};
