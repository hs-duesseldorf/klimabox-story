import React, { RefObject, useRef } from "react";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Continue } from "./continue";
import { Scene } from "./scene/scene";
import { Text } from "./text";
import { ScrollData } from "./interface/Chapter2ScrollData";
import { Sequence } from "./interface/Chapter2Enum";

const useElementOnScreen = () => {
  const [sequence, setSequence] = React.useState<Sequence>(Sequence.Intro);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const callbackFunction = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && sequence === Sequence.Intro) {
        setSequence(Sequence.Question);
      }
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current as unknown as Element);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current as unknown as Element);
      }
    };
  });

  return { containerRef, sequence };
};

const useUpdateScroll = (ref: RefObject<HTMLDivElement>) => {
  const [scrollData, setScrolldata] = React.useState<ScrollData>({
    streetHeight: 1024,
    clientHeight: 0,
    clientWidth: 0,
    diffClientAndStreetHeight: 0,
  });

  React.useEffect(() => {
    function handleScroll() {
      const streetHeight = document
        .getElementById("Street")
        ?.getBoundingClientRect().height as number;

      const clientHeight = document.documentElement.clientHeight;
      setScrolldata({
        streetHeight: streetHeight,
        clientHeight: clientHeight,
        clientWidth: document.documentElement.clientWidth,
        diffClientAndStreetHeight: (streetHeight - clientHeight) / clientHeight,
      });

      ref.current!.style.top = `-${
        ((streetHeight - clientHeight) / clientHeight) * 100
      }%`;
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return [scrollData];
};

export const StartChapter2: React.FC = () => {
  const ref = useRef(null);

  const { containerRef, sequence } = useElementOnScreen();
  const [scrollData] = useUpdateScroll(ref);

  return (
    <div>
      <div className="text-white relative" style={{ height: "400vh" }}>
        <Background />
        <Sunrise />
        <div className="sticky" ref={ref}>
          <Scene scrollData={scrollData} sequence={sequence} />
        </div>
        <Text />
        <Continue />
      </div>
      <div
        ref={containerRef}
        id="chapter2Choice"
        className="text-white relative font-bold text-2xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-5xl"
      >
        <p>Wähle das Verkehrsmittel mit dem du am meisten unterwegs bist</p>
      </div>
    </div>
  );
};
