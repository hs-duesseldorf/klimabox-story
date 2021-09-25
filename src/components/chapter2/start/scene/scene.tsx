import React from "react";
import Plx from "react-plx";
import { Train } from "./sceneComponents/train";
import { Bicycle } from "./sceneComponents/bicycle";
import { Car } from "./sceneComponents/car";
import { Sequence } from "../interface/Chapter2Enum";
import { Chapter2Content } from "../interface/interface";
import { IntroScene } from "./introScene";
import { BlackCut } from "./sceneComponents/blackCut";
import { Street } from "./street";
import { SecondVehicleChoice } from "./sceneComponents/SecondVehicleChoice";
import { WhiteCut } from "./sceneComponents/whiteCut";
import { Massenvisualisierung } from "./sceneComponents/massenvisualisierung";


const useCheckSecondChoiceAvailability =  (setSequence: React.Dispatch<React.SetStateAction<Sequence>>) => {
  React.useEffect(()=>{
    const scrollHandle = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      setSequence( s => clientHeight * 23 <= scrollPosition && scrollPosition <= clientHeight * 28.5 ?  Sequence.SecondQuestion : s)
    }
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  },[setSequence])
}

const useDetectZoom = (setTransformOrigin: React.Dispatch<React.SetStateAction<{}>>) => {
  React.useEffect(()=>{

    // TODO: hier ist noch Optimierung bezüglich des Zoom prozesses erforderlich.
    let value;
    if (window.innerWidth >= 320){
      value = 200
    }

    if (window.innerWidth >= 375){
      value = -300;
    }

    if (window.innerWidth >= 425){
      value = -300;
    }

    if (window.innerWidth >= 600){
      value = -1500;
    }

    if (window.innerWidth >= 768){
      value = -1000;
    }

    if (window.innerWidth >= 1024){
      value = window.innerHeight >= 1366? -1500: -150;
    }

    if (window.innerWidth >= 1440){
      value = -400;
    }

    if (window.innerWidth >= 1900){
      value = -500;
    }

    const scrollHandle = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      clientHeight * 13 <= scrollPosition &&  scrollPosition <= clientHeight * 22?
        setTransformOrigin( { transformOrigin: `center ${value}px` }) : setTransformOrigin({})
    }
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  },[setTransformOrigin])
}

export const Scene: React.FC<{
  sequence: Sequence;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  parallaxData: any;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  chapter2Content: Chapter2Content;
  setChapter2Content: React.Dispatch<React.SetStateAction<Chapter2Content>>;
}> = ({
        sequence,
        setSequence,
        setViewHeight,
        parallaxData,
        setParallaxData,
        chapter2Content,
        setChapter2Content
      }) => {

  const [show, setShow] = React.useState(false);
  const [previousSequence, setPreviousSequence] = React.useState<Sequence>(Sequence.NotDefined);

  const [applyTransformOrigin, setTransformOrigin] = React.useState<{}>();
  useDetectZoom(setTransformOrigin);
  useCheckSecondChoiceAvailability(setSequence);

  return (
    <div>
      <Plx id="scaleContainer" style = {applyTransformOrigin} parallaxData={parallaxData.scene} animateWhenNotInViewport={true}>

        <IntroScene chapter2Content={chapter2Content} parallaxData={parallaxData.backgroundData}
></IntroScene>
        <Street />
        <Train sequence={sequence}
               parallaxData={parallaxData.trainData}
               previousSequence={previousSequence}
               setPreviousSequence={setPreviousSequence}
               setViewHeight={setViewHeight}
               setParallaxData={setParallaxData}
               setSequence={setSequence}
               setShow={setShow}
               setChapter2Content={setChapter2Content} />

        <Car sequence={sequence}
             parallaxData={parallaxData.carData}
             previousSequence={previousSequence}
             setPreviousSequence={setPreviousSequence}
             setViewHeight={setViewHeight}
             setParallaxData={setParallaxData}
             setSequence={setSequence}
             setShow={setShow}
             setChapter2Content={setChapter2Content} />

        <Bicycle
          sequence={sequence}
          parallaxData={parallaxData.bicylceData}
          previousSequence={previousSequence}
          setPreviousSequence={setPreviousSequence}
          setViewHeight={setViewHeight}
          setParallaxData={setParallaxData}
          setSequence={setSequence}
          setShow={setShow}
          setChapter2Content={setChapter2Content} />


        <BlackCut parallaxData={parallaxData.blackCutData}></BlackCut>
        <SecondVehicleChoice parallaxData={parallaxData.secondVehicleChoice}></SecondVehicleChoice>
        <BlackCut parallaxData={parallaxData.blackCutEndSceneData}></BlackCut>
        <Massenvisualisierung
          massenvisualisierungBackground={parallaxData.massenvisualisierungBackground}
          parallaxData={parallaxData.massenvisualisierung}
        />
        <WhiteCut show={show} setShow={setShow}></WhiteCut>

      </Plx>
    </div>
  );
};
