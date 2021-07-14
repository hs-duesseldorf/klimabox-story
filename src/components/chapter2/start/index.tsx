import React, { RefObject, useRef } from "react";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Continue } from "./continue";
import { Scene } from "./scene/scene";
import { Text } from "./text";
import { Sequence } from "./interface/Chapter2Enum";
import { getParallaxData } from "./animationParallaxData";
import { getContentData } from "./content";
import { getQuiz } from "./quizData";

const useElementOnScreen = (
  elementRef: RefObject<Element>,
  root: null,
  rootMargin: "0px",
  threshold: 0
) => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  }

  React.useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

  }, [elementRef, threshold, root, rootMargin]);
  return entry;
};

const useUpdateScroll = (ref: RefObject<HTMLDivElement>) => {
  React.useEffect(() => {
    function handleScroll() {
      const streetHeight = document
        .getElementById("Street")
        ?.getBoundingClientRect().height as number;
      const offsetTop = document.getElementById("Street")?.offsetTop as number;
      const clientHeight = document.documentElement.clientHeight;
      ref.current!.style.top = `-${streetHeight + offsetTop - clientHeight}px`;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
};

export const StartChapter2: React.FC = () => {
  const [sequence, setSequence] = React.useState<Sequence>(Sequence.Intro);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [viewHeight, setViewHeight] = React.useState("400vh");

  const entry = useElementOnScreen(containerRef, null, "0px", 0);

  React.useEffect(() => {
    setSequence( s => entry?.isIntersecting && s === Sequence.Intro ? Sequence.Question : s); 
  }, [entry?.isIntersecting, setSequence])


  useUpdateScroll(ref);
  const [parallaxData, setParallaxData] = React.useState<any>(
    getParallaxData(
      Sequence.Intro,
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    )
  );
  const [contentData, setContentData] = React.useState(
    getContentData(Sequence.Intro)
  );

  const [quizData, setQuizData] = React.useState(
    getQuiz(Sequence.Car)
    )

  return (
    <div>
      <div className="text-white relative" style={{ height: `${viewHeight}` }}>
        <Background />
        <Sunrise />
        <div className="sticky" ref={ref} style={{ top: "0px" }}>
          <Scene
            sequence={sequence}
            setViewHeight={setViewHeight}
            parallaxData={parallaxData}
            setParallaxData={setParallaxData}
            contentData={contentData}
            setContentData={setContentData}
            setSequence = {setSequence}
            quizData = {quizData}
            setQuizData = {setQuizData}
          />
        </div>
        <Text />
        <Continue />
        <div
          id="chapter2Choice"
          className="text-white absolute font-bold text-2xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-5xl"
          style={{ top: "400vh" }}
        >
          <p ref={containerRef}>
            Wähle das Verkehrsmittel mit dem du am meisten unterwegs bist
          </p>
        </div>
      </div>
    </div>
  );
};
