import React from "react";
import styles from "../../start.module.css";

export const BlackCut = () => {
  return (
    <div className={`${styles.blackCut} w-full absolute`}
         style={{ background: "black", height: document.documentElement.clientHeight }}>
    </div>);
};