import React from "react";

import { Street } from "./street";
import { BuildingC } from "./buildingC";
import { BuildingB } from "./buildingB";
import { BuildingA } from "./buildingA";
import { Train } from "./train";
import { Bicycle } from './bicycle';
import { Car } from "./car";

export const Scene: React.FC = () => (
    <div>
        <BuildingC/>
        <BuildingB/>
        <BuildingA/>
        <Train/>
        <Bicycle/>
        <Car/>
        <Street/>
    </div>
)