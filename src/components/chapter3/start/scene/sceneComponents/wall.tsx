import React from "react";
import imgWall from "../../asset/kapitel3_wand.png";
import imgTelephone from "../../asset/kapitel3_telephone.png";
import imgDoor from "../../asset/kapitel3_tuer.png";
import imgTakeItEasy from "../../asset/kapitel3_takeItEasy.png";
import imgTechSolutions from "../../asset/kapitel3_klimaboxTechSolutions.png"
import styles from "../../start.module.css"

export const Wall: React.FC =() => {
  return(
    <div className={`absolute ${styles.wall}`} >
      <img src={imgWall} alt="wall" />
      <img src={imgTelephone} alt="telephone" className={`absolute ${styles.telephone}`} />
      <img src={imgDoor} alt="door" className={`absolute ${styles.door}`} />
      <img src={imgTakeItEasy} alt="takeItEasy" className={`absolute ${styles.takeItEasy}`} />
      <img src={imgTechSolutions} alt="TechSolutions" className={`absolute ${styles.techSolutions}`} />
    </div>
  )
}