import React from "react";

import { Street } from "./street";
import { BuildingC } from "./buildingC";
import { BuildingB } from "./buildingB";
import { BuildingA } from "./buildingA";
import { Train } from "./train";
import { Bicycle } from './bicycle';
import { Car } from "./car";
import { ScrollData } from "../interface/Chapter2ScrollData";
import { Sequence } from "../interface/Chapter2Enum";

export const Scene: React.FC<{ scrollData: ScrollData, sequence: Sequence }> = ({ scrollData, sequence }) => {

  return (
    <div>
      <BuildingC />
      <BuildingB />
      <BuildingA />
      <Train scrollData={scrollData} sequence= {sequence}  />
      <Bicycle scrollData={scrollData} sequence= {sequence} />
      <Car scrollData={scrollData} sequence= {sequence} />
      <Street />
    </div>
  )
}