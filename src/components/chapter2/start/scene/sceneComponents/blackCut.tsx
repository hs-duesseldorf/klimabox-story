import React from "react";
import Plx from "react-plx";
import styles from "../../start.module.css";

export const BlackCut: React.FC<{ parallaxData: [] }> = ({ parallaxData }) => {
  return (
    <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
      <div className={`${styles.blackCut} absolute w-full `}
           style={{ background: "black", height: document.documentElement.clientHeight * 15}}>
      </div>
    </Plx>);
};