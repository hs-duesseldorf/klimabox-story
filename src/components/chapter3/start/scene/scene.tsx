import React from "react";
import { Graffiti } from "./sceneComponents/graffiti";
import { Street } from "./sceneComponents/street";
import { Tree } from "./sceneComponents/tree";
import styles from "../start.module.css";
import { Hochhaus } from "./sceneComponents/hochhaus";
import { getParallaxData } from "./animationParallaxData";
import Plx from "react-plx";
import { Car } from "./sceneComponents/car";
import { Human } from "./sceneComponents/human";
import { Wall } from "./sceneComponents/wall";
import { Lamp } from "./sceneComponents/lamp";
import { BlackCut } from "./sceneComponents/blackCut";
import { Indoor } from "./sceneComponents/indoor";
import { Massenvisualisierung } from "./sceneComponents/Massenvisualisierung";
import { IndoorRoom } from "./sceneComponents/indoorRoom";
import { TecChoices } from "./sceneComponents/tecChoices";
import { Sequence } from "../interfaces/Chapter3Enum";
import { SmartphonePath } from "./sceneComponents/smartphonePath";

const useDisplayElementsAtCertainHigh = (setter: React.Dispatch<React.SetStateAction<any>>, factor: number) => {
  React.useEffect(() => {
    const scrollHandle = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      setter(clientHeight * factor <= scrollPosition);
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, [setter, factor]);
};

export const Scene: React.FC = () => {
  const [parallaxData, setParallaxData] = React.useState<any>(getParallaxData(document.documentElement.clientHeight, document.documentElement.clientWidth));
  const [sequence, setSequence] = React.useState<Sequence>(Sequence.NotDefined);
  const [showIndoorRoom2, setShowIndoorRoom2] = React.useState<boolean>(false);
  const [clientHeight, setClientHeight] = React.useState<string>("4000vh");
  const [displayChoice, setDisplayChoice] = React.useState<boolean>(false);

  useDisplayElementsAtCertainHigh(setShowIndoorRoom2, 31);
  useDisplayElementsAtCertainHigh(setDisplayChoice, 40);

  return (
    <div style={{ height: `${clientHeight}` }}>

      <div className="fixed w-full h-full">
        <Plx className={"absolute absolute w-full h-full"} parallaxData={parallaxData.sceneData}
             animateWhenNotInViewport={true}>
          <Plx className={`absolute w-full h-full`} parallaxData={parallaxData.backgroundData}
               animateWhenNotInViewport={true}>
            <Graffiti styleName={styles.graffiti1}></Graffiti>
            <Hochhaus></Hochhaus>
            <Graffiti styleName={styles.graffiti2}></Graffiti>
            <Wall></Wall>
          </Plx>

          <Street></Street>

          <Plx className={`absolute w-full h-full`} parallaxData={parallaxData.backgroundData}
               animateWhenNotInViewport={true}>
            <Tree styleName={styles.tree1}></Tree>
            <Tree styleName={styles.tree2}></Tree>
            <Tree styleName={styles.tree3}></Tree>
            <Lamp></Lamp>
          </Plx>

          <Human parallaxData={parallaxData.humanData}></Human>
          <Car parallaxData={parallaxData.carData}></Car>
        </Plx>

        <BlackCut parallaxData={parallaxData.blackCut}></BlackCut>
        <BlackCut parallaxData={parallaxData.blackCut2}></BlackCut>

        <Plx className={"absolute w-full h-full opacity-0"} parallaxData={parallaxData.indoorSceneData}
             animateWhenNotInViewport={true}>
          <Plx className={"absolute"} parallaxData={parallaxData.indoorRoom} animateWhenNotInViewport={true}>
            {showIndoorRoom2 ? <IndoorRoom></IndoorRoom> : <Indoor></Indoor>}
          </Plx>
          <Massenvisualisierung parallaxData={parallaxData.massenvisualisierung}></Massenvisualisierung>

          <Plx className={"opacity-0"} parallaxData={parallaxData.tecChoiceData} animateWhenNotInViewport={true}>
            <TecChoices setSequence={setSequence}
                        setParallaxData={setParallaxData}
                        setClientHeight={setClientHeight} />
          </Plx>

          {
            displayChoice && sequence === Sequence.Smartphone ?
              <SmartphonePath parallaxDataSmartphone={parallaxData.smartPhoneData} parallaxDataSmartIcon={parallaxData.smartPhoneIconStart} /> :
              displayChoice && sequence === Sequence.Tablet ?
                <div>Tablet path</div> :
                <div> Notebook path</div>
          }

        </Plx>


      </div>
    </div>
  );
};