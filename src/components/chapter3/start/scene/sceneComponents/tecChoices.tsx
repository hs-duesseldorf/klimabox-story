import React from "react";
import imgSmartphone from "../../asset/kapitel3_smartphoneSelect.png";
import imgNotebook from "../../asset/kapitel3_notebookSelect.png";
import imgTablet from "../../asset/kapitel3_TabletSelect.png";
import styles from "../../start.module.css";
import { Sequence } from "../../interfaces/Chapter3Enum";
import { getParallaxData } from "../animationParallaxData";

export const TecChoices: React.FC<{
  setSequence: React.Dispatch<React.SetStateAction<Sequence>>,
  setParallaxData: React.Dispatch<React.SetStateAction<any>>,
  setClientHeight: React.Dispatch<React.SetStateAction<string>>,
}> = ({
        setSequence,
        setParallaxData, setClientHeight
      }) => {

  const clickhandler = (sequence: Sequence) => {
    switch (sequence) {
      case Sequence.Smartphone: setSequence(Sequence.Smartphone);
        setClientHeight("6100vh");
        setParallaxData(getParallaxData(document.documentElement.clientHeight, document.documentElement.clientWidth));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p className={`absolute ${styles.choiceText}`}>Welches Gerät nutzt du am liebsten?</p>
      <img src={imgSmartphone} alt="imgSmartphone" className={`absolute ${styles.smartphone}`}
           onClick={() => clickhandler(Sequence.Smartphone)} />
      <img src={imgNotebook} alt="imgNotebook" className={`absolute ${styles.notebook}`} />
      <img src={imgTablet} alt="imgTablet" className={`absolute ${styles.tablet}`} />
    </div>

  );
};