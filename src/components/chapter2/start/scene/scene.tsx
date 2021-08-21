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

export const Scene: React.FC<{}> = () => {
  return (
    <div>
      <BuildingC parallaxData={null}></BuildingC>
      <BuildingB parallaxData={null}></BuildingB>
      <BuildingA parallaxData={null}></BuildingA>
      <Train />
      <Bicycle />
      <Car />
      <Street />
    </div>
  );
};
