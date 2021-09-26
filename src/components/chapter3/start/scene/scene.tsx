import React from "react";
import { Graffiti } from "./sceneComponents/graffiti";
import { Street } from "./sceneComponents/street";
import { Tree } from "./sceneComponents/tree";
import styles from "../start.module.css"
import { Hochhaus } from "./sceneComponents/hochhaus";
import { getParallaxData } from "./animationParallaxData";
import Plx from "react-plx";
import { Car } from "./sceneComponents/car";
import { Human } from "./sceneComponents/human";

export const Scene: React.FC =() => {
  const [parallaxData, setParallaxData] = React.useState<any>(getParallaxData());
  return(
    <div style={{height: "10000vh"}}>

      <div className="fixed w-full h-full">
        <Plx className={`absolute w-full h-full`} parallaxData={parallaxData.backgroundData} animateWhenNotInViewport={true}>
          <Graffiti styleName={styles.graffiti1}></Graffiti>
          <Hochhaus></Hochhaus>
          <Graffiti styleName={styles.graffiti2}></Graffiti>
        </Plx>

        <Street></Street>

        <Plx className={`absolute w-full h-full`} parallaxData={parallaxData.backgroundData} animateWhenNotInViewport={true}>
          <Tree styleName={styles.tree1}></Tree>
          <Tree styleName={styles.tree2}></Tree>
          <Tree styleName={styles.tree3}></Tree>
        </Plx>

        <Human parallaxData={parallaxData.carData}></Human>
        <Car parallaxData={parallaxData.carData}></Car>
      </div>
    </div>
  )
}