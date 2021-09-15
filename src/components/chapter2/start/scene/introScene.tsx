import React from "react";
import Plx from "react-plx";
import styles from "../start.module.css";
import { BuildingC } from "./sceneComponents/buildingC";
import { BuildingB } from "./sceneComponents/buildingB";
import { BuildingA } from "./sceneComponents/buildingA";
import { Graffiti } from "./sceneComponents/graffiti";
import { BuildingD } from "./sceneComponents/buildingD";
import { Chapter2Content } from "../interface/interface";
import { EndScreen } from "./sceneComponents/endScreen";

export const IntroScene: React.FC<{
  parallaxData: any; chapter2Content: Chapter2Content;
}> = ({
        parallaxData,
        chapter2Content
      }) => {
  return (
    <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
      <BuildingC></BuildingC>
      <BuildingB></BuildingB>
      <BuildingA buildingStyle={styles.buildingAIntroScene}></BuildingA>
      <Graffiti chapter2Content={chapter2Content}></Graffiti>
      <BuildingD></BuildingD>
      <EndScreen></EndScreen>
    </Plx>
  );
};
