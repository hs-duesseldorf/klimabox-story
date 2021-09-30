import React from "react";

import wallImg from "../../asset/kapitel2_wand.png";
import takeItEasyImg from "../../asset/kapitel2_takeItEasy.png";
import telephoneImg from "../../asset/kapitel2_telefon.png";
import doorImg from "../../asset/kapitel2_tuer.png";
import allWeHaveIsNowImg from "../../asset/kapitel2_allWeHaveIsNow.png";
import styles from "../../start.module.css";

export const EndScreen: React.FC = () => {
  return (
    <div className={`${styles.endScene} absolute w-full`}>
      <img src={wallImg} alt="wall" className={`${styles.wall} absolute`} />
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
    </div>
  );
};
