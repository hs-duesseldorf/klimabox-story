import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_fahrrad_auswahl.png";
import bycicleImg from "../../asset/kapitel2_fahrrad_auswahl_effekt.png";
import Plx from "react-plx";
import { Sequence } from "../../interface/Chapter2Enum";
import { Selection } from "../../../../topic-selection";
import { getParallaxData } from "../../animationParallaxData";
import { getContentData } from "../../content";

import { Chapter2Content } from "../../interface/interface";

export const Bicycle: React.FC<{
  parallaxData: [];
  sequence: Sequence;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  previousSequence: Sequence;
  setPreviousSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  setChapter2Content: React.Dispatch<React.SetStateAction<Chapter2Content>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
        parallaxData,
        sequence,
        setSequence,
        previousSequence,
        setPreviousSequence,
        setViewHeight,
        setParallaxData,
        setChapter2Content,
        setShow
      }) => {

  const [silloutteOpacity, setSilloutteOpacity] = React.useState(0.1);
  const mouseEnterHandlerFunction = () => setSilloutteOpacity(1);
  const mouseLeaveHandlerFunction = () => setSilloutteOpacity(0.1);
  const mouseClickEventHandlerFunction = () => {
    if (previousSequence !== Sequence.Bicycle) {
      setViewHeight(`${document.documentElement.clientHeight * 25}px`);
      setParallaxData(
        getParallaxData(
          Sequence.Bicycle,
          document.documentElement.clientHeight,
          document.documentElement.clientWidth
        )
      );
      setSequence(Sequence.Bicycle);
      setChapter2Content(getContentData(Sequence.Bicycle));
      if (previousSequence !== Sequence.NotDefined) {
        setShow(true);
        setTimeout(() => window.scrollTo(0, document.documentElement.clientHeight * 11), 1000);
      }
      setPreviousSequence(Sequence.Bicycle);
    } else {
      setViewHeight(`${document.documentElement.clientHeight * 33}px`);
      setSequence(Sequence.Bicycle);
      setTimeout(() => window.scrollTo({ top: document.documentElement.clientHeight * 32, behavior: "smooth" }), 100);
    }
  };

  const topicSelection = sequence === Sequence.Question || sequence === Sequence.SecondQuestion ?
    {
      containerStyle: { opacity: silloutteOpacity },
      containerClassName: styles.bicycleChoice,
      selection: [
        {
          style: { width: "100%" },
          imagePath: bycicleImg,
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
          mouseClickEventHandler: mouseClickEventHandlerFunction
        }
      ]
    } : undefined;

  return (
    <div id="bicycle" className={`${styles.bicycle} absolute -top-96`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={img} alt="Bicycle" className="absolute" />
        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};
