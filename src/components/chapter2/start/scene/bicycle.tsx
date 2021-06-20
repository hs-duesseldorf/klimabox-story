
import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_fahrrad_auswahl.png";
import carImg from "../asset/kapitel2_fahrrad_auswahl_effekt.png";
import Plx from "react-plx";
import { ScrollData } from "../interface/Chapter2ScrollData";
import { Sequence } from "../interface/Chapter2Enum";
import { Selection } from '../../../topic-selection';
import { TopicSelection } from "../../../topic-selection/interfaces/selection";


export const Bicycle: React.FC<{ scrollData: ScrollData, sequence: Sequence }> = ({ scrollData, sequence }) => {

  const [bicycle, setBicycleWidth] = React.useState(0);
  React.useEffect(() => setBicycleWidth(document.getElementById("bicycle")?.getBoundingClientRect().width as number), [bicycle]);

  const parallaxData = [
    {
      start: scrollData.clientHeight,
      end: 3000,
      properties: [
        {
          startValue: 0,
          endValue: ( 1 - (bicycle/(scrollData.clientWidth)) ) * 700,
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
          position: "absolute",
          left: "-14%",
          top: "-1.5rem",
          width: "128%",
          zIndex: 2,
        },
        selection: [{
          imagePath: carImg,
          link: "#",
          mouseEnterEventHandler: mouseEnterHandlerFunction,
          mouseLeaveEventHandler: mouseLeaveHandlerFunction,
        }],
      }
      break;
  }

  return (
    <div id="bicycle" className={`${styles.bicycle} absolute -top-96`}>
      <Plx parallaxData={parallaxData}>
        <img
          src={img}
          alt="Bicycle"
          className="absolute"
        />
        {topicSelection != null ? <Selection topicSelection={topicSelection} /> : null}
      </Plx>
    </div>

  )
}