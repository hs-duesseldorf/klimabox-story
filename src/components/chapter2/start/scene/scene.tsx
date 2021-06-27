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
import { ScrollData } from "../interface/Chapter2ScrollData";
import { Sequence } from "../interface/Chapter2Enum";

export const Scene: React.FC<{
  scrollData: ScrollData;
  sequence: Sequence;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
}> = ({ scrollData, sequence, setViewHeight }) => {
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

      <Train scrollData={scrollData} sequence={sequence} />
      <Bicycle scrollData={scrollData} sequence={sequence} />
      <Car
        scrollData={scrollData}
        sequence={sequence}
        setViewHeight={setViewHeight}
      />
      <Street />
    </div>
  );
};
