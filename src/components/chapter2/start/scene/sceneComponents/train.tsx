import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";
import { Sequence } from "../../interface/Chapter2Enum";

import { Selection } from "../../../../topic-selection";
import trainImg from "../../asset/kapitel2_bahn_auswahl_effekt.png";
import { getParallaxData } from "../../animationParallaxData";
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
      setViewHeight("4000vh");
      setParallaxData(
        getParallaxData(
          Sequence.Train,
          document.documentElement.clientHeight,
          document.documentElement.clientWidth
        )
      );
      setSequence(Sequence.Train);
      setChapter2Content(getContentData(Sequence.Train));
      if (previousSequence !== Sequence.NotDefined) {
        //window.scrollTo(0, 0);
        setShow(true);
      }
      setPreviousSequence(Sequence.Train);
    } else {
      setSequence(Sequence.Train);
    }
  };

  const topicSelection = sequence === Sequence.Question || sequence === Sequence.SecondQuestion ?
    {
      containerStyle: { opacity: silloutteOpacity },
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
    <div id="train" className={`${styles.train} absolute -top-96`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={img} alt="train" className="absolute" />

        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};