import React from "react";
import img from "../../asset/kapitel3_graffiti.png";

export const Graffiti: React.FC<{styleName: string}> = ({styleName}) => {
  return(
    <img src={img} alt="graffiti" className={`absolute ${styleName}`} />
  )
}