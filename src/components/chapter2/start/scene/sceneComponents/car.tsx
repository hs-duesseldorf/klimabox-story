import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_auto_auswahl.png";
import carImg from "../../asset/kapitel2_auto_auswahl_effekt.png";
import Plx from "react-plx";
import { Sequence } from "../../interface/Chapter2Enum";
import { Selection } from "../../../../topic-selection";
import { getParallaxData, setSceneParallax } from "../../animationParallaxData";
import { Chapter2Content } from "../../interface/interface";
import { getContentData } from "../../content";

export const Car: React.FC<{
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
    if (previousSequence !== Sequence.Car) {
      setViewHeight(`${document.documentElement.clientHeight * 25}px`);
      setSceneParallax(getParallaxData(Sequence.Car), setParallaxData);
      setSequence(Sequence.Car);
      setChapter2Content(getContentData(Sequence.Car));
      if (previousSequence !== Sequence.NotDefined) {
        setShow(true);
        setTimeout(() => window.scrollTo(0, document.documentElement.clientHeight * 11), 1000);
      }
      setPreviousSequence(Sequence.Car);
    } else {
      setViewHeight(`${document.documentElement.clientHeight * 33}px`);
      setSequence(Sequence.Car);
      setTimeout(() => window.scrollTo({ top: document.documentElement.clientHeight * 32, behavior: "smooth" }), 100);
    }
  };


  const topicSelection = sequence === Sequence.Question || sequence === Sequence.SecondQuestion ?
    {
      containerStyle: { opacity: silloutteOpacity },
      containerClassName: styles.carChoice,
      selection: [
        {
          style: { width: "100%" },
          imagePath: carImg,
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
          mouseClickEventHandler: mouseClickEventHandlerFunction
        }
      ]
    } : undefined;


  return (
    <div className={`${styles.car} absolute -top-96 `}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img id="car" src={img} alt="car" className="absolute" />
        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};
