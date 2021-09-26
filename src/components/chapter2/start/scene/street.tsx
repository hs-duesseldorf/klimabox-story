import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_straße_front.png";
import streetImg from "../asset/kapitel2_strasse-End.png";
import { StreetLamp } from "./sceneComponents/streetlamp";

const useCheckHeight = (setshowQuiz: React.Dispatch<React.SetStateAction<boolean>>) => {
  React.useEffect(() => {
    function handleScroll() {
      const switchHeight = document.documentElement.clientHeight * 28;
      const scrollPosition = document.documentElement.scrollTop;
      setshowQuiz(switchHeight < scrollPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
};

export const Street: React.FC = () => {
  const [showEndstreet, setShowEndstreet] = React.useState(false);
  useCheckHeight(setShowEndstreet);
  return (
    <div>
      {showEndstreet ? (<div>
          <img
            src={streetImg}
            alt="streetEnd"
            className={`${styles.streetEnd} absolute`}
          />
          <StreetLamp></StreetLamp>
        </div>
      ) : (<img
        id="Street"
        src={img}
        alt="street"
        className={`${styles.street} absolute -top-96`}
      />)}

    </div>
  );
};
