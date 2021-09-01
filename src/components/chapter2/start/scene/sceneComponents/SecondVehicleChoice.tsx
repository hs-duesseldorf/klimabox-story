import React from "react";
import styles from "../../start.module.css";
import Plx from "react-plx";

export const SecondVehicleChoice: React.FC<{ containerRef: React.MutableRefObject<null>, parallaxData: [] }> = ({
                                                                                                                  containerRef,
                                                                                                                  parallaxData
                                                                                                                }) => (
  <Plx
    className={`${styles.secondChoiceChapter2} text-white absolute font-bold`}
    parallaxData={parallaxData} animateWhenNotInViewport={true}
  >
    <p ref={containerRef}>
      Möchtest du noch mehr erfahren?
    </p>
  </Plx>
);