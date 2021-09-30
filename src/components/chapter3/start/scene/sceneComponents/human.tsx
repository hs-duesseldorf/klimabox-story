import React from "react";
import styles from "../../start.module.css";
import img from "../../asset/kapitel3_man.png";
import Plx from "react-plx";

export const Human: React.FC<{ parallaxData: []; }> = ({ parallaxData, })=> {
  return(
  <Plx className={`absolute ${styles.human}`} parallaxData={parallaxData} animateWhenNotInViewport={true}>
    <img id="human" src={img} alt="human" className={` w-full`}/>
  </Plx>
  )
}