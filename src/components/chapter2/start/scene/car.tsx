import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_auto_auswahl.png";
import Plx from "react-plx";
import { TopicSelection } from "../../../topic-selection/interfaces/selection";
import { Sequence } from "../interface/Chapter2Enum";

import { Selection } from "../../../topic-selection";
import carImg from "../asset/kapitel2_auto_auswahl_effekt.png";
import { getParallaxData } from "../animationParallaxData";
import { getContentData } from "./../content";

export const Car: React.FC<{
  sequence: Sequence;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  parallaxData: any;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
  setContentData: React.Dispatch<React.SetStateAction<any>>;
}> = ({
  sequence,
  setViewHeight,
  parallaxData,
  setParallaxData,
  setContentData,
}) => {
  
  const [silloutteOpacity, setSilloutteOpacity] = React.useState(0.1);
  const mouseEnterHandlerFunction = () => setSilloutteOpacity(1);
  const mouseLeaveHandlerFunction = () => setSilloutteOpacity(0.1);
  const mouseClickEventHandlerFunction = () => {
    setViewHeight("2000vh");
    setParallaxData(
      getParallaxData(
        Sequence.Car,
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      )
    );
    setContentData(getContentData(Sequence.Car));
  };

  let topicSelection: TopicSelection | undefined = undefined;
  switch (sequence) {
    case Sequence.Question:
      topicSelection = {
        containerStyle: {
          opacity: silloutteOpacity,
          paddingTop: "6%",
          position: "absolute",
          zIndex: 2,
          width: "100%",
        },
        selection: [
          {
            style: { width: "100%" },
            imagePath: carImg,
            mouseEnterEventHandler: mouseEnterHandlerFunction,
            mouseLeaveEventHandler: mouseLeaveHandlerFunction,
            mouseClickEventHandler: mouseClickEventHandlerFunction,
          },
        ],
      };
      break;
    case Sequence.Intro:
      topicSelection = undefined;
      break;
  }

  return (
    <div className={`${styles.car} absolute -top-96 `}>
      <Plx
        parallaxData={parallaxData}>
        <img id="car" src={img} alt="car" className="absolute" />
        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};
