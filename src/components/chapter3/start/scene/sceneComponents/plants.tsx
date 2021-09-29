import img from "../../asset/kapitel3_pflanze.png";
import React from "react";

export const Plants: React.FC<{styleName: string}> = ({styleName}) => {
  return(
    <img src={img} alt="Pflanze" className={`absolute ${styleName}`} />
  )
}