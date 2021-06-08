import React from "react";

import { Street } from "./street";
import { BuildingC } from "./buildingC";
import { BuildingB } from "./buildingB";
import { BuildingA } from "./buildingA";
import { Train } from "./train";
import { Bicycle } from './bicycle';
import { Car } from "./car";
import { ScrollData } from "../interface/Chapter2ScrollData";

export const Scene: React.FC<{ scrollData: ScrollData }> = ({ scrollData }) => {
  return (
    <div>
      <BuildingC />
      <BuildingB />
      <BuildingA />
      <Train scrollData={scrollData} />
      <Bicycle scrollData={scrollData} />
      <Car scrollData={scrollData} />
      <Street />
    </div>
  )
}