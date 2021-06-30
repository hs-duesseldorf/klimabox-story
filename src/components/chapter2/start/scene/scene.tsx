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
}> = ({ sequence, setViewHeight, parallaxData, setParallaxData }) => {
  return (
    <div>
      <Plx>
        <BuildingC />
        <BuildingB />
        <BuildingA />
        <Graffiti />
        <BuildingD />
        <EndScreen/>
      </Plx>

      <Train sequence={sequence} parallaxData = {parallaxData.trainData} />
      <Bicycle sequence={sequence} parallaxData = {parallaxData.bicylceData}/>
      <Car
        sequence={sequence}
        setViewHeight={setViewHeight}
        parallaxData = {parallaxData.carData}
        setParallaxData = {setParallaxData}
      />
      <Street />
    </div>
  );
};
