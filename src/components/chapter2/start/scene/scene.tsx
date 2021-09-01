import React, { RefObject, useRef } from "react";
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

const useElementOnScreen = (
  elementRef: RefObject<Element>,
  root: null,
  rootMargin: "0px",
  threshold: 0
) => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  React.useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);
  return entry;
};

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

  const containerRef = useRef(null);
  const entry = useElementOnScreen(containerRef, null, "0px", 0);
  const [show, setShow] = React.useState(false);
  const [previousSequence, setPreviousSequence] = React.useState<Sequence>(Sequence.NotDefined);
  React.useEffect(() => {
    setSequence(s => (entry?.isIntersecting && s === Sequence.Car) || (entry?.isIntersecting && s === Sequence.Train) || (entry?.isIntersecting && s === Sequence.Train)
      ? Sequence.SecondQuestion : s);
  }, [entry?.isIntersecting, setSequence]);

  return (
    <div>
      <Plx parallaxData={parallaxData.scene} animateWhenNotInViewport={true}>

        <IntroScene chapter2Content={chapter2Content} parallaxData={parallaxData.backgroundData}
                    parallaxDataMassenvisualsierungBackground={parallaxData.massenvisualisierungBackground}
                    parallaxDataMassenvisualsierung={parallaxData.massenvisualisierung}></IntroScene>
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
        <SecondVehicleChoice containerRef={containerRef}
                             parallaxData={parallaxData.secondVehicleChoice}></SecondVehicleChoice>
        <WhiteCut show={show} setShow={setShow}></WhiteCut>
        <BlackCut parallaxData={parallaxData.blackCutEndSceneData}></BlackCut>

      </Plx>
    </div>
  );
};
