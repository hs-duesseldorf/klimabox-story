import React from "react";

import { Street } from "./street";
import { BuildingC } from "./buildingC";
import { BuildingB } from "./buildingB";
import { BuildingA } from "./buildingA";

export const Buildings: React.FC = () => (
    <div className={`relative w-full`}>
        <BuildingC/>
        <BuildingB/>
        <BuildingA/>
        <Street />
    </div>
)