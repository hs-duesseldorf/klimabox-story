import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";
import { Sequence } from "../../interface/Chapter2Enum";

import { Selection } from "../../../../topic-selection";
import trainImg from "../../asset/kapitel2_bahn_auswahl_effekt.png";
import { getParallaxData, setSceneParallax } from "../../animationParallaxData";
import { getContentData } from "../../content";
import { Chapter2Content } from "../../interface/interface";

export const Train: React.FC<{
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
    if (previousSequence !== Sequence.Train) {
      setViewHeight(`${document.documentElement.clientHeight * 25}px`);
      setSceneParallax(getParallaxData(Sequence.Train), setParallaxData);
      setSequence(Sequence.Train);
      setChapter2Content(getContentData(Sequence.Train));
      if (previousSequence !== Sequence.NotDefined) {
        setShow(true);
        setTimeout(() => window.scrollTo(0, document.documentElement.clientHeight * 11), 1000);
      }
      setPreviousSequence(Sequence.Train);
    } else {
      setViewHeight(`${document.documentElement.clientHeight * 33}px`);
      setSequence(Sequence.Train);
      setTimeout(() => window.scrollTo({ top: document.documentElement.clientHeight * 32, behavior: "smooth" }), 100);
    }
  };

  const topicSelection = sequence === Sequence.Question || sequence === Sequence.SecondQuestion ?
    {
      containerStyle: { opacity: silloutteOpacity },
      containerClassName: styles.trainChoice,
      selection: [
        {
          imagePath: trainImg,
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
          mouseClickEventHandler: mouseClickEventHandlerFunction
        }
      ]
    } : undefined;

  return (
    <div id="train" className={`${styles.train} absolute -top-96 cursor-pointer`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={img} alt="train" className="absolute" />

        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};