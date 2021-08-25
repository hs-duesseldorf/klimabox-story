import React from "react";
import Plx from "react-plx";
import styles from "../start.module.css";
import img from "../asset/kapitel1_intro_building-3.png";
import { BuildingC } from "./sceneComponents/buildingC";
import { BuildingB } from "./sceneComponents/buildingB";
import { BuildingA } from "./sceneComponents/buildingA";
import { Street } from "./street";

export const IntroScene: React.FC<{ parallaxData: any }> = ({ parallaxData }) => {
  return (
    <div>
      <BuildingC parallaxData={null}></BuildingC>
      <BuildingB parallaxData={null}></BuildingB>
      <BuildingA parallaxData={null}></BuildingA>
      <Street />
    </div>
  );
};
