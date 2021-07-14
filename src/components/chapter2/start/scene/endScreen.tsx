import React from "react";
import Plx from "react-plx";

import wallImg from "../asset/kapitel2_wand.png";
import streetLampImg from "../asset/kapitel2_strassenlaterne.png";
import takeItEasyImg from "../asset/kapitel2_takeItEasy.png";
import telephoneImg from "../asset/kapitel2_telefon.png";
import doorImg from "../asset/kapitel2_tuer.png";
import allWeHaveIsNowImg from "../asset/kapitel2_allWeHaveIsNow.png";
import styles from "../start.module.css";

export const EndScreen: React.FC<{ parallaxData: any }> = ({
  parallaxData,
}) => {
  return (
    <div className={`${styles.endScene} absolute w-full`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={wallImg} alt="wall" className={`${styles.wall} absolute`} />
        <img
          src={streetLampImg}
          alt="streetLamp"
          className={`${styles.streetlamp} absolute`}
        />
        <img
          src={takeItEasyImg}
          alt="takeItEasy"
          className={`${styles.takeItEasy} absolute`}
        />
        <img
          src={telephoneImg}
          alt="telephone"
          className={`${styles.telephone} absolute`}
        />
        <img
          src={allWeHaveIsNowImg}
          alt="telephone"
          className={`${styles.allWeHaveIsNow} absolute`}
        />
        <img src={doorImg} alt="door" className={`${styles.door} absolute`} />
      </Plx>
    </div>
  );
};
