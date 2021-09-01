import React from "react";
import styles from "../../start.module.css";

export const WhiteCut: React.FC<{ show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }> = ({
                                                                                                                show,
                                                                                                                setShow
                                                                                                              }) => {
  let className = show ? "show" : "";
  className += ` ${styles.whiteCut} w-full absolute`;
  return (<div className={className}
               onAnimationEnd={() => {
                 console.log("animation has ended");
                 setShow(false);
               }}
               style={{ background: "white", height: document.documentElement.clientHeight }}>
  </div>);
};