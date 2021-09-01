import React, { RefObject, useRef } from "react";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Continue } from "./continue";
import { Scene } from "./scene/scene";
import { Text } from "./text";
import { Sequence } from "./interface/Chapter2Enum";
import { getParallaxData } from "./animationParallaxData";
import { getContentData } from "./content";
import { VehicleChoice } from "./vehicleChoice";

const calculateTopOffset = (setOffset: React.Dispatch<React.SetStateAction<String>>) => {
  setTimeout(() => {
    const clientHeight = document.documentElement.clientHeight;
    const streetElement = document.getElementById("Street");
    const imageHeight = streetElement?.scrollHeight as number;
    const streetPosition = streetElement?.offsetTop as number;
    setOffset(`-${(streetPosition - clientHeight) / 2 + imageHeight - 5}px`);
  }, 100);
};

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

export const StartChapter2: React.FC = () => {
  const containerRef = useRef(null);
  const [sequence, setSequence] = React.useState<Sequence>(Sequence.Intro);
  const [viewHeight, setViewHeight] = React.useState("400vh");
  const [offset, setOffset] = React.useState<String>("0px");
  const [chapter2Content, setChapter2Content] = React.useState(getContentData(Sequence.Intro));
  const [parallaxData, setParallaxData] = React.useState<any>(
    getParallaxData(
      Sequence.Intro,
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    )
  );

  React.useEffect(() => calculateTopOffset(setOffset), [offset]);

  const entry = useElementOnScreen(containerRef, null, "0px", 0);
  React.useEffect(() => {
    setSequence(s => entry?.isIntersecting && s === Sequence.Intro ? Sequence.Question : s);
  }, [entry?.isIntersecting, setSequence]);

  return (<div style={{ height: `${viewHeight}` }}>
    <Background />
    <Sunrise />
    <div className="fixed w-full" style={{ top: `${offset}` }}>
      <Scene
        sequence={sequence}
        setSequence={setSequence}
        setViewHeight={setViewHeight}
        parallaxData={parallaxData}
        setParallaxData={setParallaxData}
        chapter2Content={chapter2Content}
        setChapter2Content={setChapter2Content}
      />
    </div>
    <Text />
    <Continue />
    <VehicleChoice containerRef={containerRef}></VehicleChoice>
  </div>);
};