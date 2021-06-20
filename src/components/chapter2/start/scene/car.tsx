import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_auto_auswahl.png";
import Plx from "react-plx";
import { ScrollData } from "../interface/Chapter2ScrollData";
import { TopicSelection } from "../../../topic-selection/interfaces/selection";
import { Sequence } from "../interface/Chapter2Enum";

import { Selection } from '../../../topic-selection';
import carImg from "../asset/kapitel2_auto_auswahl_effekt.png";


export const Car: React.FC<{ scrollData: ScrollData, sequence: Sequence }> = ({ scrollData, sequence }) => {
  const parallaxData = [
    {
      start: scrollData.clientHeight,
      end: 3000,
      properties: [
        {
          startValue: 0,
          endValue: scrollData.clientWidth*0.10,
          property: 'translateX',
        }
      ]
    },
  ];

  const [silloutteOpacity, setSilloutteOpacity] = React.useState(0.1);
  const mouseEnterHandlerFunction = () => setSilloutteOpacity(1);
  const mouseLeaveHandlerFunction = () => setSilloutteOpacity(0.1);

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
        selection: [{
          style: {width: "100%"},
          imagePath: carImg,
          link: "#",
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
        }],
      }
      break;
  }

  return (
    <div className={`${styles.car} absolute -top-96 `}>
      <Plx parallaxData={parallaxData} >
        <img id="car" src={img} alt="car" className="absolute" />
        {topicSelection != null ? <Selection topicSelection={topicSelection} /> : null}
      </Plx>
    </div>
  )
}