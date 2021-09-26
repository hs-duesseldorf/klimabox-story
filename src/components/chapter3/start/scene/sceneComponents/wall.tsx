import React from "react";
import img from "../../asset/kapitel3_graffiti.png";

export const Wall: React.FC =() => {
  return(
    <img src={img} alt="graffiti" className={`absolute ${styleName}`} />
  )
}