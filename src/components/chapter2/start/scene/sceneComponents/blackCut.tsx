import React from "react";
import Plx from "react-plx";
import styles from "../../start.module.css";

export const BlackCut: React.FC<{ parallaxData: [] }> = ({ parallaxData }) => {
  return (
    <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
      <div className={`${styles.blackCut} w-full absolute`}
           style={{ background: "black", height: document.documentElement.clientHeight }}>
      </div>
    </Plx>);
};