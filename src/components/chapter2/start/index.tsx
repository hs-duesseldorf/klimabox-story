import React, { RefObject, useRef } from "react";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Continue } from "./continue";
import { Scene } from "./scene/scene";
import { Text } from "./text";
import { Sequence } from "./interface/Chapter2Enum";
import { getParallaxData } from "./animationParallaxData";
import { getContentData } from './content';

const useElementOnScreen = () => {
  const [sequence, setSequence] = React.useState<Sequence>(Sequence.Intro);
  const containerRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const callbackFunction = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && sequence === Sequence.Intro) {
        setSequence(Sequence.Question);
      } else {
        setSequence(Sequence.Intro);
      }
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const copyRef = containerRef;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (copyRef.current) {
      observer.observe(copyRef.current as unknown as Element);
    }

    return () => {
      if (copyRef.current) {
        observer.unobserve(copyRef.current as unknown as Element);
      }
    };
  }, []);

  return { containerRef, sequence };
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
      /*console.log(
        document.documentElement.clientHeight +
          document.documentElement.scrollTop
      );*/
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
};

export const StartChapter2: React.FC = () => {
  const ref = useRef(null);
  const [viewHeight, setViewHeight] = React.useState("400vh");

  const { containerRef, sequence } = useElementOnScreen();
  useUpdateScroll(ref);
  const [parallaxData, setParallaxData] = React.useState<any>(
    getParallaxData(
      Sequence.Intro,
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    )
  );
  const [contentData, setContentData] = React.useState(getContentData(Sequence.Intro));

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
            setContentData = {setContentData}
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
