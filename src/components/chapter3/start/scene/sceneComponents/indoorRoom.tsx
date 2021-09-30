import React from "react";
import imgIndoorWindow from "../../asset/kapitel3_indoorWindow.png";
import imgDesk from "../../asset/kapitel3_desk.png";
import styles from "../../start.module.css";

export const IndoorRoom: React.FC = () => {
  return (
    <div className={"w-full h-full"}>
      <img src={imgIndoorWindow} alt="imgIndoorWindow" />
      <img src={imgDesk} alt="table" className={`absolute ${styles.desk}`} />
    </div>
  );
};