import React from "react";
import img from "../../asset/kapitel3_tree.png";
import styles from "../../start.module.css"

export const Tree: React.FC<{styleName:string}> = ({styleName}) => {
  return(
    <img src={img} alt="tree" className={`absolute ${styleName}`} />
  )
}