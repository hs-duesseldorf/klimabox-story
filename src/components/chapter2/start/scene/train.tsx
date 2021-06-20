import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";
import { ScrollData } from "../interface/Chapter2ScrollData";
import { TopicSelection } from "../../../topic-selection/interfaces/selection";
import { Sequence } from "../interface/Chapter2Enum";

import { Selection } from '../../../topic-selection';
import trainImg from "../asset/kapitel2_bahn_auswahl_effekt.png";

export const Train: React.FC<{ scrollData: ScrollData, sequence: Sequence }> = ({ scrollData, sequence }) => {

  const [trainWidth, setTrainWidth] = React.useState(0);
  React.useEffect(() => setTrainWidth(document.getElementById("train")?.getBoundingClientRect().width as number), [trainWidth]);

  const [silloutteOpacity, setSilloutteOpacity] = React.useState(0.1);
  const mouseEnterHandlerFunction = () => setSilloutteOpacity(1);
  const mouseLeaveHandlerFunction = () => setSilloutteOpacity(0.1);

  let topicSelection: TopicSelection | undefined = undefined;
  switch (sequence) {
    case Sequence.Question:
      topicSelection = {
        selection: [{
          imagePath: trainImg,
          link: "#",
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
        }],
        containerStyle: {
          width: "99%",
          opacity: silloutteOpacity,
          position: "absolute",
        }
      }
      break;
  }

  const parallaxData = [
    {
      start: scrollData.clientHeight,
      end: 3000,
      properties: [
        {
          startValue: 0,
          endValue: ( 1 - (trainWidth/(scrollData.clientWidth)) ) * 1500,
          property: 'translateX',
        }
      ]
    },
  ];

  return (
    <div id="train" className={`${styles.train} absolute -top-96`}>
      <Plx parallaxData={parallaxData}>
        <img
          src={img}
          alt="train"
          className="absolute"
        />
        {topicSelection != null ? <Selection topicSelection={topicSelection} /> : null}
      </Plx>
    </div>
  )
}