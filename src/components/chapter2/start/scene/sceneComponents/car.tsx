import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_auto_auswahl.png";
import carImg from "../../asset/kapitel2_auto_auswahl_effekt.png";
import Plx from "react-plx";
import { Sequence } from "../../interface/Chapter2Enum";
import { Selection } from "../../../../topic-selection";
import { getParallaxData } from "../../animationParallaxData";

export const Car: React.FC<{
  parallaxData: [];
  sequence: Sequence;
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>;
  setViewHeight: React.Dispatch<React.SetStateAction<string>>;
  setParallaxData: React.Dispatch<React.SetStateAction<any>>;
}> = ({ parallaxData, sequence, setSequence, setViewHeight, setParallaxData }) => {

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
    setSequence(Sequence.Car);
  };

  const topicSelection = sequence === Sequence.Question ?
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
