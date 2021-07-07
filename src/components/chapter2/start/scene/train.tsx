import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";
import { TopicSelection } from "../../../topic-selection/interfaces/selection";
import { Sequence } from "../interface/Chapter2Enum";

import { Selection } from "../../../topic-selection";
import trainImg from "../asset/kapitel2_bahn_auswahl_effekt.png";

export const Train: React.FC<{
  sequence: Sequence;
  parallaxData: any;
}> = ({sequence, parallaxData }) => {
  
  const [silloutteOpacity, setSilloutteOpacity] = React.useState(0.1);
  const mouseEnterHandlerFunction = () => setSilloutteOpacity(1);
  const mouseLeaveHandlerFunction = () => setSilloutteOpacity(0.1);

  let topicSelection: TopicSelection | undefined = undefined;
  switch (sequence) {
    case Sequence.Question:
      topicSelection = {
        selection: [
          {
            imagePath: trainImg,
            mouseEnterEventHandler: mouseEnterHandlerFunction,
            mouseLeaveEventHandler: mouseLeaveHandlerFunction,
          },
        ],
        containerStyle: {
          width: "99%",
          opacity: silloutteOpacity,
          position: "absolute",
        },
      };
      break;
    case Sequence.Intro:
      topicSelection = undefined;
      break;
  }

  return (
    <div id="train" className={`${styles.train} absolute -top-96`}>
      <Plx parallaxData={parallaxData}>
        <img src={img} alt="train" className="absolute" />

        {topicSelection !== undefined ? (
          <Selection topicSelection={topicSelection} />
        ) : null}
      </Plx>
    </div>
  );
};
